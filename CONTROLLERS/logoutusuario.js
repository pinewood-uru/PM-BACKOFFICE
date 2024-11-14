import { ModeloUsuario } from "../DATABASE/models/ModeloUser.js";


export const logoutusuario = async (req, res, next) => {
    const token = req.headers["authorization"]
    const usuario = await ModeloUsuario.findOne({session: token });

    if (usuario) {
        usuario.session = null;
        await usuario.save();
        res.json({ message: "Se ha cerrado la sesion" });
    } else {
        next(new Error("No se ha podido cerrar la sesion"));
    }
}