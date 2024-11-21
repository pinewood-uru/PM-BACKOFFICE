import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./DATABASE/conectarDB.js";

// import { loginUsuario} from "./CONTROLLERS/loginusuario.js";
// import { logoutusuario } from "./CONTROLLERS/logoutusuario.js";
import { getUsuarios } from "./CONTROLLERS/getusuarios.js";
import { getProyectos } from "./CONTROLLERS/getproyectos.js";
// import { getProyectobyID } from "./CONTROLLERS/getproyectobyid.js";
import { postUsuario } from "./CONTROLLERS/postusuarios.js";
import { postProyecto } from "./CONTROLLERS/postproyecto.js";
import { deleteUsuario } from "./CONTROLLERS/deleteusuario.js";
import { deleteProyecto } from "./CONTROLLERS/deleteproyecto.js";
import { modificarproyecto } from "./CONTROLLERS/modificarproyecto.js";
import { loginAdmin } from "./CONTROLLERS/loginadm.js";
import { logoutadmin } from "./CONTROLLERS/logoutadmin.js";
import { postAdmin } from "./CONTROLLERS/postadmin.js";
import { getAdmin } from "./CONTROLLERS/getadmin.js";

import { mostrarDatos } from "./Middlewares/mostrarDatos.js";
import { manejadorErrores } from "./Middlewares/manejoErrores.js";
import { controlarSession } from "./Middlewares/controlarsession.js";
// import { controlarSessionUsuario } from "./Middlewares/controlarsessionUSER.js";
import { register } from "module";


const app = express();

app.use(express.json());
app.use(cors());
conectarDB();


// MIDDLEWARE > DATOS --> En cada llamada para por el middleware para poder verlo en consola
app.use(mostrarDatos)

const port = process.env.port;

app.get("/", (req, res) => res.send("Hola Mundo"));

// Admin
app.post("/loginadm",loginAdmin);

app.use(controlarSession)

app.post("/logoutadm",logoutadmin);
app.post("/registeradm", postAdmin);
app.get("/administrador", getAdmin);


// Usuarios

// app.post("/login",loginUsuario);

// app.use(controlarSessionUsuario)

app.post("/registeruser", postUsuario);

// app.post("/logout",logoutusuario);

// PROYECTOS y USUARIOS---
app.get("/usuario", getUsuarios);
app.get("/proyecto", getProyectos);
app.get("/proyecto/:id", getProyectos);

app.post("/proyecto", postProyecto);
app.delete("/proyecto/:id", deleteProyecto);
app.put("/proyecto/:id", modificarproyecto);
app.delete("/usuario/:id", deleteUsuario);



// MIDDLEWARE ERRORES
app.use(manejadorErrores)

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});
