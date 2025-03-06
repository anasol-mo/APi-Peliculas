const Tipo = require("../models/Tipo");

// Obtener todos los tipos con paginación y búsqueda
exports.getTipos = async (req, res) => {
  try {
    const { page = 1, limit = 10, nombre } = req.query;
    const query = nombre ? { nombre: new RegExp(nombre, "i") } : {};

    const tipos = await Tipo.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Tipo.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      data: tipos,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un tipo por ID
exports.getTipoById = async (req, res) => {
  try {
    const tipo = await Tipo.findById(req.params.id);
    if (!tipo) return res.status(404).json({ message: "Tipo no encontrado" });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tipo
exports.createTipo = async (req, res) => {
  try {
    const nuevoTipo = new Tipo(req.body);
    await nuevoTipo.save();
    res.status(201).json(nuevoTipo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un tipo
exports.updateTipo = async (req, res) => {
  try {
    const tipoActualizado = await Tipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tipoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un tipo (Soft Delete: cambia el estado a inactivo)
exports.deleteTipo = async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(req.params.id, { estado: false }, { new: true });
    res.json({ message: "Tipo marcado como inactivo", tipo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
