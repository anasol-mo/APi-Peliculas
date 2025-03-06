const Director = require("../models/Director");

exports.getDirectores = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDirectorById = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    if (!director) return res.status(404).json({ message: "Director no encontrado" });
    res.json(director);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDirector = async (req, res) => {
  try {
    const nuevoDirector = new Director(req.body);
    await nuevoDirector.save();
    res.status(201).json(nuevoDirector);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateDirector = async (req, res) => {
  try {
    const directorActualizado = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(directorActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteDirector = async (req, res) => {
  try {
    await Director.findByIdAndDelete(req.params.id);
    res.json({ message: "Director eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
