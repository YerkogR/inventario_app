const { Schema, model } = require("mongoose");
require('dotenv').config()

const productoSchema = new Schema(
  {
    nombreProducto: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: false,
    },
    descripcion: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

productoSchema.methods.setImgUrl = function setImgUrl (filename) {
  this.imgUrl = process.env.APP_HOST + ':' + process.env.PORT + '/public/products/' + filename
}

module.exports = model("Productos", productoSchema);
