import {ModeloProyecto} from "../DATABASE/models/ModeloProyecto.js"

export const getProyectos = (req, res) => {
    ModeloProyecto.find()
    .then((data) => {
        if(data.lenght === 0) {
            res.json([]);
        }else{
            res.json(data);
        }
    })
    .catch((error) => {
        res.send("Error");
    });
};