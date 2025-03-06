const express = require("express");
const router = express.Router();
const directorController = require("../controllers/Director.controller");

router.get("/", directorController.getDirectores);
router.get("/:id", directorController.getDirectorById);
router.post("/", directorController.createDirector);
router.put("/:id", directorController.updateDirector);
router.delete("/:id", directorController.deleteDirector);

module.exports = router;
