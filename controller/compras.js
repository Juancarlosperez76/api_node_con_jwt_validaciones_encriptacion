const { response } = require("express")
const compras = require("../models/compras")

//Método GET Compras
const getCompra = async (req, res = response) => {
    const compra = await compras.find()

    res.json({
        msg: "Método GET Compras",
        compra
    })
}

//Método POST Compras
const postCompra = async (req, res) => {
    const { Id, Producto, FechaCompra, Proveedor, Total, Estado } = req.body
    const compra = new compras({ Id, Producto, FechaCompra, Proveedor, Total, Estado })

    //Guarda los datos de registro
    await compra.save()

    res.json({
        msg: "Método POST Compras",
        compra
    })
}

//Método PUT Compras
const putCompra = async (req, res) => {
    const { Id, Producto, FechaCompra, Proveedor, Total, Estado } = req.body
    const compra = await compras.findOneAndUpdate({ Id: Id }, { Producto: Producto, FechaCompra: FechaCompra, Proveedor: Proveedor, Total:Total, Estado: Estado })

    res.json({
        msg: 'Método PUT Compras',
        compra
    })
}

//Método PATCH Compras
const patchCompra = async (req, res) => {
    const { Id, Producto, Estado } = req.body
    const compra = await compras.findOneAndUpdate({ Id: Id }, { Producto: Producto, Estado: Estado })

    res.json({
        msg: 'Método PATCH Compras',
        compra
    })
}

//Método DELETE Compras
const deleteCompra = async (req, res) => {
    const { Id } = req.query
    const compra = await compras.findOneAndDelete({ Id: Id })

    res.json({
        msg: 'Método DELETE Compras',
        compra
    })
}

module.exports = {
    getCompra,
    postCompra,
    putCompra,
    patchCompra,
    deleteCompra
}