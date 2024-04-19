require('dotenv').config()

const app = require('./app')
require('./database')

// Esta lógica es para ejecutar el servidor
async function main(){
   try{
        await app.listen(app.get('port'))
        console.log('Servidor corriendo en el puerto: ', app.get('port'))
   } catch (error){
    console.log('Error al iniciar el servidor: ', error)
   }
}

main();