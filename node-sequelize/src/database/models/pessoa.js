"use strict";

const isValid = require("../../utils/CPFValidationHelper.js");
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Pessoa extends Model {
        static associate(models) {
            Pessoa.hasMany(models.Curso, {
                foreignKey: "docente_id"
            });
            Pessoa.hasMany(models.Matricula, {
                foreignKey: "estudante_id",
                scope: { status: "matriculado" },
                as: "aulasMatriculadas"
            });
        }
    }
    Pessoa.init({
        nome: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3,100],
                    msg: "name must have between 3 and 100 characters"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "email format is invalid"
                }
            }
        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                isCPFValid: (cpf) => {
                    if(!isValid(cpf)) throw new Error("CPF format is invalid");
                }
            }
        },
        ativo: DataTypes.BOOLEAN,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Pessoa",
        tableName: "pessoas",
        paranoid: true,
        defaultScope: {
            where: {
                ativo: true
            }
        },
        scopes: {
            allRegistries: {
                where: {}
            }
        }
    });
    return Pessoa;
};