import { Schema, model } from "mongoose";

// DEFINIR SCHEMA DE LA COLECTION

const SchemaAdm = new Schema({
  id: { type: Number, unique: true },
  nombre: String,
  email: { type: String, unique: true },
  password: String,
  session: String,
});

// Crear modulo

export const ModeloAdmin = model("administrador", SchemaAdm);
