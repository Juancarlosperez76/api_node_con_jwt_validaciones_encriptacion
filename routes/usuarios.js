const { Router } = require('express');
const { check } = require("express-validator")
const router = Router(); // Obtener la funcion router

const { validarCampos } = require("../middlewares/validar-campos")

const { getUsuario, postUsuario, putUsuario, patchUsuario, deleteUsuario } = require("../controller/usuarios")

router.get('/', getUsuario)

router.post('/', [
    check('Rol', 'El campo Rol es obligatorio, seleccione una opción').not().isEmpty(),
    check('Rol', 'No es un rol válido').isIn(['Administrador', 'Empleado', 'Cliente']),
    check('Nombre', 'El campo Nombre es obligatorio').not().isEmpty(),
    check('Apellidos', 'El campo Apellidos es obligatorio').not().isEmpty(),
    check('TipoDocumento', 'El campo Tipo de documento es obligatorio, seleccione una opción').not().isEmpty(),
    check('Documento', 'El campo Documento es obligatorio').not().isEmpty(),
    check('Direccion', 'El campo Dirección es obligatorio').not().isEmpty(),
    check('Telefono', 'El campo Teléfono es obligatorio').not().isEmpty(),
    check('Correo', 'El campo Correo es obligatorio').not().isEmpty(),
    check('Correo', 'El correo ingresado no es valido ').isEmail(),
    check('Contrasena', 'El campo Contraseña es obligatorio').not().isEmpty(),
    check('Contrasena', 'La contraseña debe contener mas de 4 caracteres').isLength({ min: 4 }),
    check('Estado', 'El campo Estado es obligatorio').not().isEmpty(),
    check('Estado', 'Ingrese un estado válido').isIn(['Activo', 'Inactivo']),

    validarCampos
], postUsuario)

router.put('/', putUsuario)

router.patch('/', patchUsuario)

router.delete('/', deleteUsuario)

//exportar módulo
module.exports = router



