import { ModeloProyecto } from "../DATABASE/models/ModeloProyecto.js";

export const getproyectobyid = (req, res, next) => {
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
    const TokenProyecto = req.params.token;
    ModeloProyecto.findOne({ token: TokenProyecto })
    .then((data) => {
        if (!data) {
            throw new Error(`No se ha encontrado el Proyecto con Token ${TokenProyecto}`);
        } else {
            res.json(data);
        }
    })
    .catch((error) => {
        next(error);
    });
}