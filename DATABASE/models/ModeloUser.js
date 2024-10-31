import { Schema, model } from "mongoose";

// DEFINIR SCHEMA DE LA COLECTION

const SchemaUser = new Schema({
  id: { type: Number, unique: true },
  nombre: String,
  email: String,
  empresa: String,
  direccion: String,
});

// Crear modulo

export const ModeloUsuario = model("usuario", SchemaUser);
