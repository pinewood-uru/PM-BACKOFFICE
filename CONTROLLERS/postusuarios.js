import { ModeloUsuario } from "../DATABASE/models/ModeloUser.js";

export const postUsuario = async (req,res, next)=>{
    const {nombre, email, empresa, direccion} = req.body;

    const nuevousuario = new ModeloUsuario();
    nuevousuario.nombre = nombre,
    nuevousuario.email = email,
    nuevousuario.empresa = empresa,
    nuevousuario.direccion = direccion

nuevousuario.save()
.then((data)=>{
    res.json({messege:`Proyecto ${nuevousuario.direccion} ingresado con exito`})
})
.catch((error)=>{
    next(error)
})

}

