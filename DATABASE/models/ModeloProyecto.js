import { Schema, model } from "mongoose";

const   SchemaProyecto = new Schema({
    id: {type: Number, unique: true},
    razonsocial: String,
    rut: String,
    direccion: String,
    padron: String,
    estado: String
});

export const ModeloProyecto = model ("proyecto", SchemaProyecto);