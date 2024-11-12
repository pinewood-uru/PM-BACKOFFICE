import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./DATABASE/conectarDB.js";

import { getUsuarios } from "./CONTROLLERS/getusuarios.js";
import { getProyectos } from "./CONTROLLERS/getproyectos.js";
import { postUsuario } from "./CONTROLLERS/postusuarios.js";
import { postProyecto } from "./CONTROLLERS/postproyecto.js";
import { deleteUsuario } from "./CONTROLLERS/deleteusuario.js";
import { deleteProyecto } from "./CONTROLLERS/deleteproyecto.js";
import { postAdmin } from "./CONTROLLERS/postadmin.js";
import { getAdmin } from "./CONTROLLERS/getadmin.js";
const app = express();

app.use(express.json());
app.use(cors());
conectarDB();

const port = process.env.port;

app.get("/", (req, res) => res.send("Hola Mundo"));

// USUARIOS ---

app.get("/usuario", getUsuarios);
app.post("/usuario", postUsuario);
app.delete("/usuario", deleteUsuario);

// PROYECTOS ---

app.get("/proyecto", getProyectos);
app.post("/proyecto", postProyecto);
app.delete("/proyecto", deleteProyecto);

// ADM

app.post("/administrador", postAdmin);
app.post("/administrador", getAdmin);



app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
