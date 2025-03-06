require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas (las definiremos después)
app.use("/api/generos", require("./routes/genero.routes"));
app.use("/api/directores", require("./routes/director.routes"));
app.use("/api/productoras", require("./routes/productora.routes"));
app.use("/api/tipos", require("./routes/tipo.routes"));
app.use("/api/media", require("./routes/media.routes"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
