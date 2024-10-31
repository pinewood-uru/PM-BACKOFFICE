import { ModeloUsuario } from "../DATABASE/models/ModeloUser.js";

export const deleteUsuario = (req, res, next) => {
    const IdUsuario = req.params.id;
    ModeloUsuario.deleteOne({id: IdUsuario})
    .then((data) => {
        if(data.deletedCount !==1){
            throw new Error(`No se ha podido eliminar el proyecto con id${IdUsuario}`)
    }else{
        res.json({message: `Se ha eliminado el cliente con id ${IdUsuario}`})
    }
    }).catch((error) => {
        next(error)
    })
}