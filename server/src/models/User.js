const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const saltRoudns = 10;

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
      required: false,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: false,
    },
    productos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Producto",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("contrasena")) {
    const document = this;

    bcrypt.hash(document.contrasena, saltRoudns, (err, hashedPassword) => {
      if (err) {
        next(e);
      } else {
        document.contrasena = hashedPassword;
        next();
      }
    });
  }
});

module.exports = model("User", userSchema);
