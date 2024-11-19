import { ModeloAdmin } from "../DATABASE/models/ModeloAdm.js";

export const controlarSession = async (req, res, next) => {
    try{
        const authHeader = req.headers["authorization"];

        if(!authHeader){
            throw {status: 401, message: "No autorizado - No hay token"}
        }
        const admin = await ModeloAdmin.findOne({session: authHeader})

        if(admin){
            req.nombre = admin;
            next();
        }else{
            throw {status: 401, message: "Sesión Admin no es valida"}
        }

    }catch(error){
        next(error)
    }
}
