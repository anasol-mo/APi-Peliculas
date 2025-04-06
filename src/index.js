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

app.use("/api/generos", require("./routes/Genero.routes"));
app.use("/api/directores", require("./routes/Director.routes"));
app.use("/api/productoras", require("./routes/Productora.routes"));
app.use("/api/tipos", require("./routes/Tipo.routes"));
app.use("/api/media", require("./routes/Media.routes"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
