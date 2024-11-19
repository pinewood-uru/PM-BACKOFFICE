import { ModeloUsuario } from "../DATABASE/models/ModeloUser.js";

export const controlarSessionUsuario = async (req, res, next) => {
    try{
        const authHeader = req.headers["authorization"];

        if(!authHeader){
            throw {status: 401, message: "No autorizado - No hay token"}
        }
        const usuario = await ModeloUsuario.findOne({session: authHeader})

        if(usuario){
            req.nombre = usuario;
            next();
        }else{
            throw {status: 401, message: "Sesión User no es valida"}
        }

    }catch(error){
        next(error)
    }
}