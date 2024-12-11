import { ModeloProyecto } from "../DATABASE/models/ModeloProyecto.js";

export const getProyectobyID = (req, res, next) => {
    const idProyecto = req.params.id;
    ModeloProyecto.findOne({ id: idProyecto })
    .then((data) => {
        if (!data) {
            throw new Error(`No se ha encontrado el Proyecto con id ${idProyecto}`);
        } else {
            res.json(data);
        }
    })
    .catch((error) => {
        next(error);
    });
}

export const getProyectobytoken = (req, res, next) => {
    const tokenproyecto = req.params.id;
    ModeloProyecto.findOne({ token: tokenproyecto })
    .then((data) => {
        if (!data) {
            throw new Error(`No se ha encontrado el Proyecto con Token ${tokenproyecto}`);
        } else {
            res.json(data);
        }
    })
    .catch((error) => {
        next(error);
    });
}