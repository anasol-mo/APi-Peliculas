const express = require("express");
const router = express.Router();
const generoController = require("../controllers/Genero.controller");

router.get("/", generoController.getGeneros);
router.get("/:id", generoController.getGeneroById);
router.post("/", generoController.createGenero);
router.put("/:id", generoController.updateGenero);
router.delete("/:id", generoController.deleteGenero);

module.exports = router;
