const mongoose = require("mongoose");

const ProductoraSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    estado: { type: Boolean, default: true },
    slogan: { type: String },
    descripcion: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Productora", ProductoraSchema);