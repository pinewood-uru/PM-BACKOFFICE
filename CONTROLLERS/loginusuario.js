import { ModeloUsuario } from "../DATABASE/models/ModeloUser.js";


export const loginUsuario = async (req, res, next) => {
    const {email, password } = req.body;
    const usuario = await ModeloUsuario.findOne({ email, password })
    if(usuario){
        usuario.session = Math.random().toString(36).slice(2);
        usuario.save()
        .then(()=>{
            res.json({session: usuario.session, restaurante: usuario});
        })
        .catch((error)=>{
            next(error);
        });
    }else{
         next(new Error("No se ha podido iniciar sesion, verifique Usuario o Contraseña"));
    }
}