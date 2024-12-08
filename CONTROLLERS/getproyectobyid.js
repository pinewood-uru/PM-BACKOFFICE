import { ModeloProyecto } from "../DATABASE/models/ModeloProyecto.js";

export const getProyectobyID = (req, res, next) => {
    const idProyecto = req.params.id;
    ModeloProyecto.findOne({ token: idProyecto })
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