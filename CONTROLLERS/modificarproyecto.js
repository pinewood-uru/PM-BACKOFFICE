import { ModeloProyecto} from "../DATABASE/models/ModeloProyecto.js";
export const modificarproyecto = (req, res, next) => {
    const IdProyecto = req.params.id;
    const {razonsocial, id, rut, direccion, padron, estado, edt, token} = req.body;

    const datosNuevos = {};

    if (id) datosNuevos.id = id
    if (razonsocial) datosNuevos.razonsocial = razonsocial;
    if (rut) datosNuevos.rut = rut;
    if (direccion) datosNuevos.direccion = direccion;
    if (padron) datosNuevos.padron = padron;
    if (estado) datosNuevos.estado = estado;
    if (edt) datosNuevos.edt = edt;
    if (token) datosNuevos.token = token;
    

    ModeloProyecto.updateOne({ id: IdProyecto }, datosNuevos)
    .then((data) => {
        if (data.matchedCount === 0) {
            throw new Error(`No se ha podido modificar el proyecto con id ${IdProyecto}`);
        }
        res.json({ message: `Se ha modificado el proyecto con id ${IdProyecto}` })
    })
    .catch((error) => {
        next(error);
    });
}