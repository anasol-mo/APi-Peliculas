const express = require("express");
const router = express.Router();
const tipoController = require("../controllers/Tipo.controller");

router.get("/", tipoController.getTipos);
router.get("/:id", tipoController.getTipoById);
router.post("/", tipoController.createTipo);
router.put("/:id", tipoController.updateTipo);
router.delete("/:id", tipoController.deleteTipo);

module.exports = router;
