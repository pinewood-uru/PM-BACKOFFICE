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
import { modificarproyecto } from "./CONTROLLERS/modificarproyecto.js";
import { postAdmin } from "./CONTROLLERS/postadmin.js";
import { getAdmin } from "./CONTROLLERS/getadmin.js";

import { mostrarDatos } from "./Middlewares/mostrarDatos.js";
import { manejadorErrores } from "./Middlewares/manejoErrores.js";
import { register } from "module";


const app = express();

app.use(express.json());
app.use(cors());
conectarDB();


// MIDDLEWARE > DATOS --> En cada llamada para por el middleware para poder verlo en consola
app.use(mostrarDatos)

const port = process.env.port;

app.get("/", (req, res) => res.send("Hola Mundo"));

// USUARIOS ---

// register
app.post("/usuario", postUsuario);

app.get("/usuario", getUsuarios);
app.delete("/usuario/:id", deleteUsuario);

// PROYECTOS ---

app.get("/proyecto", getProyectos);
app.post("/proyecto", postProyecto);
app.delete("/proyecto/:id", deleteProyecto);
app.put("/proyecto/:id", modificarproyecto);

// ADM

// Register
app.post("/x", postAdmin);

app.post("/administrador", getAdmin);

// MIDDLEWARE ERRORES
app.use(manejadorErrores)

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
