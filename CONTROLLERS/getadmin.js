import { ModeloAdmin } from "../DATABASE/models/ModeloAdm.js";

export const getAdmin = (req, res) => {
  ModeloAdmin.find()
    .then((data) => {
      if (data.length === 0) {
        res.json([]);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      res.send("Error");
      res.status(500).send("Administrador no definido");

    });
};
