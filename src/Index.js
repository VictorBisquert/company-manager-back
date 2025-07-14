const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//NOTE: TRAEMOS EL ROUTES DE COMPANY
const companyRoutes = require("./routes/companyRoutes");
const taskRoutes = require("./routes/TaskRoutes");
const workerRoutes = require("./routes/WorkerRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//NOTE: AQUI INDICAMOS DE QUE RUTA VAN A VENIR LAS PETICIONES
//DE NORMAL EL FRONT CON VITE, REACT... SUELE PONER PUERTO 5173
const allowedOrigins = [
    "http://localhost:5173"
];

//NOTE: AQUI ES PARA HABILITAR EN CORS ESTAS PETICIONES, SINO
//NO DEJARA HACERLAS
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use((err, req, res, next) => {
  if (err instanceof cors.CorsError) {
    console.error(err.message);
    res.status(500).send("CORS error");
  } else {
    next(err);
  }
});

//NOTE: RUTAS
app.use("/api/company", companyRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/worker", workerRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = { app, server };