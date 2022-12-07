const { Schema, model } = require('mongoose');
const { required } = require('nodemon/lib/config');

const UsuarioSchema = Schema({

    Rol: {
        type: String,
        required: [true, 'El campo Rol es obligatorio'],
        enum: ['Administrador', 'Empleado', 'Cliente']
    },
    Nombre: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio']
    },
    Apellidos: {
        type: String,
        required: [true, 'El campo Apellidos es obligatorio']
    },
    TipoDocumento: {
        type: String,
        required: [true, 'El campo Tipo de documento es obligatorio']
    },
    Documento: {
        type: Number,
        required: [true, 'El campo Documento es obligatorio']
    },
    Direccion: {
        type: String,
        required: [true, 'El campo Dirección es obligatorio']
    },
    Telefono: {
        type: Number,
        required: [true, 'El campo Teléfono es obligatorio']
    },
    Correo: {
        type: String,
        required: [true, 'El campo Correo es obligatorio']
    },
    Contrasena: {
        type: String,
        required: [true, 'El campo Contraseña es obligatorio']
    },
    Estado: {
        type: String,
        required: [true, 'El campo Estado es obligatorio'],
        enum: ['Activo', 'Inactivo']
    }
})

module.exports = model('Usuario', UsuarioSchema)