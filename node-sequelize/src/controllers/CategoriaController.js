const Controller = require("./Controller.js");
const CategoriaService = require("../services/CategoriaServices.js");

const categoriaService = new CategoriaService();

class CategoriaController extends Controller {
    constructor() {
        super(categoriaService);
    }
}

module.exports = CategoriaController;