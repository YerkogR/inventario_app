const productoCtrl = {}

const Producto = require('../models/Producto')

productoCtrl.getProductos = async(req, res) => {
    const productos = await Producto.find()
    res.json(productos)
}

productoCtrl.createProducto = async(req, res) => {
    const {nombreProducto, marca, descripcion, cantidad, precio, imgUrl} = req.body;
    const newProducto = new Producto({
        nombreProducto: nombreProducto,
        marca: marca,
        descripcion: descripcion,
        cantidad: cantidad,
        precio: precio,
        imgUrl: imgUrl
    })
    await newProducto.save();
    res.json({message:'El producto ha sido creado exitosamente'})
}   

productoCtrl.getProductoId = async(req, res) => {
    const producto = await Producto.findById(req.params.id)
    res.json(producto)
}

productoCtrl.deleteProducto = async(req, res) => {
    await Producto.findByIdAndDelete(req.params.id)
    res.json({message: 'El producto ha sido eliminado correctamente'})
}

productoCtrl.updateProducto = async(req, res) => {
    const {nombreProducto, marca, descripcion, cantidad, precio, imgUrl} = req.body;
    await Producto.findByIdAndUpdate(req.params.id, {
        nombreProducto,
        marca,
        descripcion,
        cantidad,
        precio,
        imgUrl
    })
    res.json({message: 'El producto ha sido actualizado correctamente'})
}

module.exports = productoCtrl; 