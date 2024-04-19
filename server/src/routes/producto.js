const {Router} = require('express')
const router = Router()

const { createProducto, getProductos, getProductoId, deleteProducto, updateProducto} = require('../controllers/producto.controller')

router.route('/')
    .get(getProductos)

router.route('/createProducto')
    .post(createProducto)

router.route('/productoId/:id')
    .post(getProductoId)

router.route('/removeProducto/:id')
    .delete(deleteProducto)

router.route('/updateProducto/:id')
    .put(updateProducto) 

module.exports = router;