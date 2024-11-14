import { ModeloUsuario } from "../DATABASE/models/ModeloUser.js";
import { obtenerProximoId } from "../Utils/utils.js";

export const postUsuario = async (req,res, next)=>{
    const {nombre, email, empresa, direccion, password} = req.body;

    const usuarioExistente = await ModeloUsuario.findOne({email: email});

    if (usuarioExistente){
        throw new Error ("Este mail no esta disponible")
    }

    const nuevousuario = new ModeloUsuario();
    nuevousuario.id = await obtenerProximoId(ModeloUsuario)
    nuevousuario.nombre = nombre,
    nuevousuario.email = email,
    nuevousuario.empresa = empresa,
    nuevousuario.direccion = direccion,
    nuevousuario.password = password

nuevousuario.save()
.then((data)=>{
    res.json({messege:`Usuario ${nuevousuario.id} ingresado con exito`})
})
.catch((error)=>{
    next(error)
})

}

