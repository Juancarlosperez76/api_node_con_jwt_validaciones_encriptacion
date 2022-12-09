const { response } = require("express")
const servicios = require("../models/servicios")

//Método GET Servicios
const getServicio = async (req, res = response) => {
    const servicio = await servicios.find()

    res.json({
        msg: "Método GET Servicios",
        servicio
    })
}

//Método POST Servicios
const postServicio = async (req, res) => {
    const { Id, Nombre, Descripcion, Tiempo, Estado } = req.body
    const servicio = new servicios({ Id, Nombre, Descripcion, Tiempo, Estado })

    //Guarda los datos de registro
    await servicio.save()

    res.json({
        msg: "Método POST Servicios",
        servicio
    })
}

//Método PUT Servicios
const putServicio = async (req, res) => {
    const { Id, Nombre, Descripcion, Tiempo, Estado } = req.body
    const servicio = await servicios.findOneAndUpdate({ Id: Id }, { Nombre: Nombre, Descripcion: Descripcion, Tiempo: Tiempo, Estado: Estado })

    res.json({
        msg: 'Método PUT Servicios',
        servicio
    })
}

//Método PATCH Servicios
const patchServicio = async (req, res) => {
    const { Id, Nombre, Estado } = req.body
    const servicio = await servicios.findOneAndUpdate({ Id: Id }, { Nombre: Nombre, Estado: Estado })

    res.json({
        msg: 'Método PATCH Servicios',
        servicio
    })
}

//Método DELETE Servicios
const deleteServicio = async (req, res) => {
    const { Id } = req.query
    const servicio = await servicios.findOneAndDelete({ Id: Id })

    res.json({
        msg: 'Método DELETE Servicios',
        servicio
    })
}

module.exports = {
    getServicio,
    postServicio,
    putServicio,
    patchServicio,
    deleteServicio
}