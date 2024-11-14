import { ModeloAdmin } from "../DATABASE/models/ModeloAdm.js";
import { obtenerProximoId } from "../Utils/utils.js";

export const postAdmin = async (req, res, next) => {
  const { nombre, email, password } = req.body;

  try {
    const adminExistente = await ModeloAdmin.findOne({ email: email });
    if (adminExistente) {
      throw new Error("Este mail no esta disponible");
    }

    const nuevoadmin = new ModeloAdmin();
    nuevoadmin.id = await obtenerProximoId(ModeloAdmin);
    nuevoadmin.nombre = nombre,
    nuevoadmin.email = email,
    nuevoadmin.password = password;

      nuevoadmin.save()
      .then(() => {
        res.json({ messege: `Administrador ${nuevoadmin.id} creado con exito`})
      })
      .catch((error) => {
        next(error)
      })
  }catch(error){
    next(error)}}