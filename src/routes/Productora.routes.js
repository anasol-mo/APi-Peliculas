const express = require("express");
const router = express.Router();
const productoraController = require("../controllers/Productora.controller");

router.get("/", productoraController.getProductoras);
router.get("/:id", productoraController.getProductoraById);
router.post("/", productoraController.createProductora);
router.put("/:id", productoraController.updateProductora);
router.delete("/:id", productoraController.deleteProductora);

module.exports = router;
