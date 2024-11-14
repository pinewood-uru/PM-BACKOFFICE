import { ModeloAdmin } from "../DATABASE/models/ModeloAdm.js";


export const logoutadmin = async (req, res, next) => {
    const token = req.headers["authorization"]
    const adminstrador = await ModeloAdmin.findOne({session: token });

    if (adminstrador) {
        adminstrador.session = null;
        await adminstrador.save();
        res.json({ message: "Se ha cerrado la sesion" });
    } else {
        next(new Error("No se ha podido cerrar la sesion"));
    }
}