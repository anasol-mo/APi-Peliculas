const mongoose = require("mongoose");

const GeneroSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    estado: { type: Boolean, default: true }, // Activo o Inactivo
    descripcion: { type: String },
  },
  { timestamps: true } // Añade "createdAt" y "updatedAt"
);

module.exports = mongoose.model("Genero", GeneroSchema);