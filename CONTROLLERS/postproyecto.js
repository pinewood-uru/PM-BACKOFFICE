import { ModeloProyecto} from "../DATABASE/models/ModeloProyecto.js";

import { obtenerProximoId } from "../Utils/utils.js";

export const postProyecto = async (req,res, next)=>{
    const {razonsocial, rut, direccion, padron} = req.body;
    const nuevoproyecto = new ModeloProyecto();
    nuevoproyecto.id = await obtenerProximoId(ModeloProyecto)
    nuevoproyecto.razonsocial = razonsocial;
    nuevoproyecto.rut = rut;
    nuevoproyecto.direccion = direccion;
    nuevoproyecto.padron = padron;

    nuevoproyecto.save()
    .then((data)=>{
        res.json({messege:`Proyecto ${nuevoproyecto.direccion} ingresado con exito`})
    })
    .catch((error)=>{
        next(error)
    })

}