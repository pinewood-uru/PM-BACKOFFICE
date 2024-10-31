import { Schema, model } from "mongoose";
import {type} from "os";

const   SchemaProyecto = new Schema({
    id: {type: Number, unique: true},
    RazonSocial: String,
    Rut: String,
    Direccion: String,
    Padron: String,
});

export const ModeloProyecto = model ("Proyecto", SchemaProyecto);