const Media = require("../models/Media");

exports.getMedias = async (req, res) => {
  try {
    const medias = await Media.find().populate("genero director productora tipo");
    res.json(medias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id).populate("genero director productora tipo");
    if (!media) return res.status(404).json({ message: "Media no encontrada" });
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMedia = async (req, res) => {
  try {
    const nuevaMedia = new Media(req.body);
    await nuevaMedia.save();
    res.status(201).json(nuevaMedia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateMedia = async (req, res) => {
  try {
    const mediaActualizada = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("genero director productora tipo");
    res.json(mediaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Media eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
