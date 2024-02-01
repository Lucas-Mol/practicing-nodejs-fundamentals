const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }

    async getMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const matriculas = await pessoaServices.getMatriculasByEstudante(Number(estudanteId));

            return res.status(200).json(matriculas);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Error"});
        }
    }
}

module.exports = PessoaController;