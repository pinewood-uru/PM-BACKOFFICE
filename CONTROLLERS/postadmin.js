import { ModeloAdmin } from "../DATABASE/models/ModeloAdm.js";
import { obtenerProximoId } from "../Utils/utils.js";


export const postAdmin = async (req,res, next)=>{
    const {nombre, email} = req.body;

    const nuevoadmin = new ModeloAdmin();
    nuevoadmin.id = await obtenerProximoId(ModeloAdmin)
    nuevoadmin.nombre = nombre,
    nuevoadmin.email = email
  
nuevoadmin.save()
.then((data)=>{
    res.json({messege:`Administrador ${nuevoadmin.id} creado con exito`})
})
.catch((error)=>{
    next(error)
})

}

