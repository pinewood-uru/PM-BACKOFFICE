import { Schema, model } from "mongoose";

const   SchemaProyecto = new Schema({
    id: {type: Number, unique: true},
    razonsocial: String,
    rut: String,
    direccion: String,
    padron: String,
    estado: {type: String, default: "Recibido"},
    edt: {type: String, default: "En espera"},
    token: {type: String, default: "-", unique: true},
    
});


export const ModeloProyecto = model ("proyecto", SchemaProyecto);