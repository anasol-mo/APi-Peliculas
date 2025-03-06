const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/Media.controller");

router.get("/", mediaController.getMedias);
router.get("/:id", mediaController.getMediaById);
router.post("/", mediaController.createMedia);
router.put("/:id", mediaController.updateMedia);
router.delete("/:id", mediaController.deleteMedia);

module.exports = router;
