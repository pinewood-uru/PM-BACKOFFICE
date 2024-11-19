import { ModeloAdmin } from "../DATABASE/models/ModeloAdm.js";



export const loginAdmin = async (req, res, next) => {
    const {email, password } = req.body;
    const administrador = await ModeloAdmin.findOne({ email, password })
    if(administrador){
        administrador.session = Math.random().toString(36).slice(2);
        administrador.save()
        .then(()=>{
            res.json({session: administrador.session, email: administrador});
        })
        .catch((error)=>{
            next(error);
        });
    }else{
         next(new Error("No se ha podido iniciar sesion, verifique Usuario o Contraseña"));
    }
}