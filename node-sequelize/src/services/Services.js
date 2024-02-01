const db = require("../database/models");

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAll() {
        return db[this.model].findAll();
    }

    async getById(id) {
        return db[this.model].findByPk(id);
    }

    async create(data) {
        return db[this.model].create(data);
    }

    async updateById(id, updatedData) {
        const updatedRegistries = await db[this.model].update(updatedData, {
            where: { id }
        });

        return (updatedRegistries[0] === 0) ? false : true;
    }

    async delete(id) {
        return db[this.model].destroy({
            where: { id } 
        });
    }
}

module.exports = Services;