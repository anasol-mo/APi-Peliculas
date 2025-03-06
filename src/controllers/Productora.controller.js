const Productora = require("../models/Productora");

// Obtener todas las productoras con paginación y búsqueda
exports.getProductoras = async (req, res) => {
  try {
    const { page = 1, limit = 10, nombre } = req.query;
    const query = nombre ? { nombre: new RegExp(nombre, "i") } : {};

    const productoras = await Productora.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Productora.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      data: productoras,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una productora por ID
exports.getProductoraById = async (req, res) => {
  try {
    const productora = await Productora.findById(req.params.id);
    if (!productora) return res.status(404).json({ message: "Productora no encontrada" });
    res.json(productora);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva productora
exports.createProductora = async (req, res) => {
  try {
    const nuevaProductora = new Productora(req.body);
    await nuevaProductora.save();
    res.status(201).json(nuevaProductora);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una productora
exports.updateProductora = async (req, res) => {
  try {
    const productoraActualizada = await Productora.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(productoraActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una productora (Soft Delete: cambia el estado a inactivo)
exports.deleteProductora = async (req, res) => {
  try {
    const productora = await Productora.findByIdAndUpdate(req.params.id, { estado: false }, { new: true });
    res.json({ message: "Productora marcada como inactiva", productora });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

