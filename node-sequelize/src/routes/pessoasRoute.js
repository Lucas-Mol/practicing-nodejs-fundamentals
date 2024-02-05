const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require("../controllers/MatriculaController.js");

const router = Router();
const pessoaControlller = new PessoaController();
const matriculaControlller = new MatriculaController();

router.get("/pessoas", (req, res) => pessoaControlller.getAll(req, res));
router.get("/pessoas/all", (req, res) => pessoaControlller.getAllPessoas(req, res));
router.get("/pessoas/:id", (req, res) => pessoaControlller.getById(req, res));
router.post("/pessoas", (req, res) => pessoaControlller.create(req, res));
router.put("/pessoas/:id", (req, res) => pessoaControlller.update(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaControlller.delete(req, res));
router.get("/pessoas/:estudanteId/matriculas", (req, res) => pessoaControlller.getMatriculas(req, res));
router.post("/pessoas/:estudanteId/matriculas", (req, res) => matriculaControlller.create(req, res));


module.exports = router;