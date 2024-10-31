import { ModeloProyecto } from "../DATABASE/models/ModeloProyecto.js";

export const deleteProyecto = (req, res, next) => {
    const IdProyecto = req.params.id;
    ModeloProyecto.deleteOne({id: IdProyecto})
    .then((data) => {
        if(data.deletedCount !==1){
            throw new Error(`No se ha podido eliminar el proyecto con id${IdProyecto}`)
    }else{
        res.json({message: `Se ha eliminado el cliente con id ${IdProyecto}`})
    }
    }).catch((error) => {
        next(error)
    })
}