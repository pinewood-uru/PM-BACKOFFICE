import { Schema, model } from "mongoose";

// DEFINIR SCHEMA DE LA COLECTION

const SchemaAdm = new Schema({
  id: { type: Number, unique: true },
  nombre: String,
  email: String,
  
});

// Crear modulo

export const ModeloAdmin = model("administrador", SchemaAdm);
