import mongoose from "mongoose";

const url = process.env.mongo_url;
export const conectarDB = () => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("conectado a DB");
    })
    .catch((error) => {
      console.log("error en conexión", error);
    });
};
