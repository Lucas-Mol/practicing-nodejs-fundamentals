const Controller = require("./Controller.js");
const MatriculaService = require("../services/MatriculaServices.js");

const matriculaService = new MatriculaService();

class MatriculaController extends Controller {
    constructor() {
        super(matriculaService);
    }
}

module.exports = MatriculaController;