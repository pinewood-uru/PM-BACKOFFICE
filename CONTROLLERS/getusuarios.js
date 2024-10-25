import { ModeloUsuario } from "../DATABASE/models/ModeloUser.js";

export const getUsuarios = (req, res) => {
  ModeloUsuario.find()
    .then((data) => {
      if (data.length === 0) {
        res.json([]);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      res.send("Error");
    });
};
