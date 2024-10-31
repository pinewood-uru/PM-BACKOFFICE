import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./DATABASE/conectarDB.js";

import { getUsuarios } from "./CONTROLLERS/getusuarios.js";
import { getProyectos } from "./CONTROLLERS/getproyectos.js";

const app = express();

app.use(express.json());
app.use(cors());
conectarDB();

const port = process.env.port;

app.get("/", (req, res) => res.send("Hola Mundo"));

// GET USUARIOS ---

app.get("/usuario", getUsuarios);

// GET PROYECTOS ---

app.get("/proyecto", getProyectos);

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
