const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express();

// Configuracion del Backend
app.set('port', process.env.PORT || 4000)

// Creacion de Middlewares
app.use(cors())
app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'storage', 'imgs')))
//app.use('/public/products', express.static(__dirname+'/storage/imgs/productos'))


// Creacion de Rutas
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API Rest full de la App InventarioApp');
})

// Ruta para API Usuarios
app.use('/api/users', require('./routes/user'))
app.use('/api/productos', require('./routes/producto'))



module.exports = app;