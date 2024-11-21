import { ModeloProyecto} from "../DATABASE/models/ModeloProyecto.js";
import { obtenerProximoId } from "../Utils/utils.js";

export const postProyecto = async (req,res, next)=>{
    const {razonsocial, rut, direccion, padron, estado, edt} = req.body;
    const nuevoproyecto = new ModeloProyecto();
    nuevoproyecto.id = await obtenerProximoId(ModeloProyecto)
    nuevoproyecto.razonsocial = razonsocial;
    nuevoproyecto.rut = rut;
    nuevoproyecto.direccion = direccion;
    nuevoproyecto.padron = padron;
    // por defecto el estado sera "recibido" si no se pasa
    nuevoproyecto.estado = estado || "recibido";
    nuevoproyecto.edt = edt || "-";
    nuevoproyecto.save()
    .then((data)=>{
        res.json({messege:`Proyecto ${nuevoproyecto.direccion} ingresado con exito`})
    })
    .catch((error)=>{
        next(error)
    })

}