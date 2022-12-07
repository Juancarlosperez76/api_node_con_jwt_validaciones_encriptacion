const express = require("express")
const { generarJWT } = require("../helpers/generar-jwt")
const Usuario = require("../models/usuario")
const bcrypt = require('bcryptjs') //

const login = async (req, res) => {

    const { correo, password } = req.body

    //si el correo existe en la base de datos
    try {
        const usuarios = await Usuario.findOne({ correo })
        if (!usuarios) {
            return res.status(400).json({
                msg: "Usuario o correo no encontrado"
            })
        }

        if (!bcrypt.compare(usuarios.password == password)) {
            return res.status(400).json({
                msg: "Password incorrecto"
            })
        }

        const token = await generarJWT(usuarios.id)
        res.json({
            usuarios,
            token
        })


    } catch (err) {
        console.log("contacte el administrador del sistema" + err)
    }
}

module.exports = {
    login
}