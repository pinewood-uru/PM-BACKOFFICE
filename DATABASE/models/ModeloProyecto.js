import { Schema, model } from "mongoose";

const   SchemaProyecto = new Schema({
    id: {type: Number, unique: true},
    razonsocial: String,
    rut: String,
    direccion: String,
    padron: String,
    estado: {type: String, default: "recibido"},
    edt: {type: Date, default: "-"}
});

export const ModeloProyecto = model ("proyecto", SchemaProyecto);