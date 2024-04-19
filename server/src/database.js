const mongoose = require("mongoose");

// Conexion a la base de datos
const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : 'mongodb://127.0.0.1:27017/dbtest'

mongoose
  .connect(URI)
  .then((res) => console.log("La conexion se ha realizado exitosamente a la URI: ", URI))
  .catch((e) => console.log("Error al intentar conectarse: " + e));