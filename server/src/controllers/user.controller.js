const User = require("../models/User");
const bcrypt = require("bcrypt");

const userCtrl = {};

// Traer usuarios
userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Creacion de Usuario (REGISTRO)
userCtrl.createUser = async (req, res) => {
  const { nombre, apellido, telefono, correo, contrasena } = req.body;

  if (!nombre || !apellido || !correo || !contrasena) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  let phone = (!telefono) ? "" : telefono
  let img
  let nombreLimp = nombre.trim();
  let apellidoLimp = apellido.trim();
  let correoLimp = correo.trim();
  let contrasenaLimp = contrasena.trim();

  nombreLimp = nombreLimp.replace(/[^\w\sáéíóúüÁÉÍÓÚÜ-]/gi, "");
  apellidoLimp = apellidoLimp.replace(/[^\w\sáéíóúüÁÉÍÓÚÜ-]/gi, "");
  correoLimp = correoLimp.replace(/[^\w\s@._]/gi, "");
  contrasenaLimp = contrasenaLimp.replace(/[^\w!@#$%^&\.-_*]/gi, "");

  if (req.file){
    const { filename } = req.file
    img = process.env.APP_HOST + ':' + process.env.PORT + '/public/users/' + filename
  }else{
    img = ''
  }

  const newUser = new User({
    nombre: nombreLimp,
    apellido: apellidoLimp,
    correo: correoLimp,
    telefono: phone,
    contrasena: contrasenaLimp,
    imgURL: img,
    productos: [],
  });
  try {
    await newUser.save();
    res.status(200).json({ message: "El usuario ha sido creado exitosamente" });
  } catch (error) {
    if (error.code === 11000 || error.code === 11001) {
      res.status(500).json({
        message: "El correo ya esta siendo utilizado",
      });
    } else {
      res.status(500).json({
        message: "Ha ocurrido un error al crear el usuario",
        error: error.message,
      });
    }
  }
};

// Traer usuario por ID
userCtrl.getUserId = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// Login de Usuario
userCtrl.loginSession = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const user = await User.findOne({ correo });
    if (!user) {
      res.status(404).json("Usuario y/o contraseña incorrecta");
      return;
    }
    try {
      esCorrecta = await bcrypt.compare(contrasena, user.contrasena);
      if (esCorrecta == true) {
        res.status(200).json("Usuario autenticado correctamente");
      } else {
        res.status(401).json("Usuario y/o contraseña incorrecta");
      }
    } catch (error) {
      return error;
    }
  } catch (err) {
    res.status(500).json("Error al autenticar");
  }
};

// Eliminar Usuario
userCtrl.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("El usuario ha sido eliminado correctamente");
  }catch(error){
    res.status(500).json("Error al eliminar el usuario");
  }
  
};

// Actualización de Usuario
userCtrl.updateUser = async (req, res) => {
  const { nombre, apellido, telefono, imgURL } = req.body;

  if (!nombre || !apellido) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  const phone = (!telefono) ? "" : telefono;
  const img = (!imgURL) ? "" : imgURL;

  try {
    await User.findByIdAndUpdate(req.params.id, {
      nombre,
      apellido,
      telefono : phone,
      imgURL : img
    });
    res
      .status(200)
      .json({ message: "El usuario ha sido actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

module.exports = userCtrl;
