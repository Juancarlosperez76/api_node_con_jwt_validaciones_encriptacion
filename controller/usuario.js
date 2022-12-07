const { response } = require("express")
const Usuario = require("../models/usuario")
const bcrypt = require('bcryptjs')

const getUsuario = async (req, res = response) => {

    const usuarios = await Usuario.find()

    res.json({
        msg: "GET API USUARIO",
        usuarios
    })
}

const postUsuario = async (req, res) => {
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado } = req.body

    const usuario = new Usuario({ Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado })

    //Encriptamiento
    usuario.Contrasena = bcrypt.hashSync(Contrasena, 10)

    await usuario.save()

    res.json({
        msg: "POST API USUARIO",
        usuario
    })
}

const putUsuario = async (req, res) => {
    const { Rol, Nombre, Apellidos, TipoDocumento, Documento, Direccion, Telefono, Correo, Contrasena, Estado } = req.body
    const usuario1 = await usuario.findOneAndUpdate({ Documento: Documento }, { Rol: Rol, Nombre: Nombre, Apellidos: Apellidos, TipoDocumento: TipoDocumento, Direccion: Direccion, Telefono: Telefono, Correo: Correo, Contrasena: Contrasena, Estado: Estado })

    res.json({
        msg: 'Método PUT Usuarios',
        usuario1
    })
}

const patchUsuario = async (req, res) => {
    const { Documento, Nombre, Estado } = req.body
    const usuario1 = await usuario.findOneAndUpdate({ Documento: Documento }, { Nombre: Nombre }, { Estado: Estado })

    res.json({
        msg: 'Método PATCH Usuarios',
        usuario1
    })
}

const deleteUsuario = async (req, res) => {
    const { Documento } = req.query
    const usuario1 = await usuario.findOneAndDelete({ Documento: Documento })

    res.json({
        msg: 'Método DELETE Usuarios',
        usuario1
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    patchUsuario,
    deleteUsuario
}