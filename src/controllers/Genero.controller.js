const Genero = require("../models/Genero");

// Obtener todos los géneros
exports.getGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un género por ID
exports.getGeneroById = async (req, res) => {
  try {
    const genero = await Genero.findById(req.params.id);
    if (!genero) return res.status(404).json({ message: "Género no encontrado" });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo género
exports.createGenero = async (req, res) => {
  try {
    const nuevoGenero = new Genero(req.body);
    await nuevoGenero.save();
    res.status(201).json(nuevoGenero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un género
exports.updateGenero = async (req, res) => {
  try {
    const generoActualizado = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(generoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un género
exports.deleteGenero = async (req, res) => {
  try {
    await Genero.findByIdAndDelete(req.params.id);
    res.json({ message: "Género eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};