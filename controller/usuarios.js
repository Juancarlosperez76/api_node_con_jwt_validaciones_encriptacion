const { response } = require("express")
const usuarios = require("../models/usuarios")
const bcrypt = require('bcryptjs')

//Método GET Usuarios
const getUsuario = async (req, res = response) => {
    const usuario = await usuarios.find()

    res.json({
        msg: "Método GET Usuarios",
        usuario
    })
}

//Método POST Usuarios
const postUsuario = async (req, res) => {
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado } = req.body
    const usuario = new usuarios({ Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado })

    //Encriptamiento método POST
    usuario.Contrasena = bcrypt.hashSync(Contrasena, 10)

    //Guarda los datos de registro
    await usuario.save()

    res.json({
        msg: "Método POST Usuarios",
        usuario
    })
}

//Método PUT Usuarios
const putUsuario = async (req, res) => {
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado } = req.body
    const usuario = await usuarios.findOneAndUpdate({ Documento: Documento }, { Rol: Rol, Nombre: Nombre, Apellidos: Apellidos, TipoDocumento: TipoDocumento, Direccion: Direccion, Telefono: Telefono, Correo: Correo, Contrasena: Contrasena, Estado: Estado })

    //Encriptamiento método PUT
    usuario.Contrasena = bcrypt.hashSync(Contrasena, 10)
    await usuario.save()

    res.json({
        msg: 'Método PUT Usuarios',
        usuario
    })
}

//Método PATCH Usuarios
const patchUsuario = async (req, res) => {
    const { Nombre, Documento, Estado } = req.body
    const usuario = await usuarios.findOneAndUpdate({ Documento: Documento }, { Nombre: Nombre, Estado: Estado })

    res.json({
        msg: 'Método PATCH Usuarios',
        usuario
    })
}

//Método DELETE Usuarios
const deleteUsuario = async (req, res) => {
    const { Documento } = req.query
    const usuario = await usuarios.findOneAndDelete({ Documento: Documento })

    res.json({
        msg: 'Método DELETE Usuarios',
        usuario
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    patchUsuario,
    deleteUsuario
}