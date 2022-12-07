const express = require("express")
const { generarJWT } = require("../helpers/generar-jwt")
const usuario = require("../models/usuarios")
const bcrypt = require('bcryptjs') //

const login = async (req, res) => {

    const { Correo, Contrasena } = req.body

    //si el correo existe en la base de datos
    try {
        const usuarios = await usuario.findOne({ Correo })
        if (!usuarios) {
            return res.status(400).json({
                msg: "Usuario o correo no encontrado"
            })
        }

        const token = await generarJWT(usuarios.id)
        return bcrypt.compare(Contrasena, usuarios.Contrasena, (err, isMatch) => {

            if (err || !isMatch) {
                return res.status(400).json({
                    msg: "Contraseña incorrecta"
                })
            }
            res.json({
                usuarios,
                token
            })
        });
    } catch (error) {
        console.log("contacte el administrador del sistema" + error)
    }
}

module.exports = {
    login
}