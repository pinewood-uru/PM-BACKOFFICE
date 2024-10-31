import { Schema, model } from "mongoose";

// DEFINIR SCHEMA DE LA COLECTION

const SchemaUser = new Schema({
  id: { type: Number, unique: true },
  Nombre: String,
  Email: String,
  Empresa: String,
  Direccion: String,
});

// Crear modulo

export const ModeloUsuario = model("usuario", SchemaUser);
