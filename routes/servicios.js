const { Router } = require('express');
const { check } = require("express-validator")
const router = Router(); // Obtener la funcion router

const { validarCampos } = require("../middlewares/validar-campos")

const { getServicio, postServicio, putServicio, patchServicio, deleteServicio } = require("../controller/servicios")

router.get('/', getServicio)

router.post('/', [
    check('Id', 'El campo Id es obligatorio').not().isEmpty(),
    check('Nombre', 'El campo Nombre es obligatorio').not().isEmpty(),
    check('Descripcion', 'El campo Descripción es obligatorio').not().isEmpty(),
    check('Tiempo', 'El campo Tiempo es obligatorio').not().isEmpty(),
    check('Estado', 'El campo Estado es obligatorio').not().isEmpty(),
    check('Estado', 'Ingrese un estado válido').isIn(['Activo', 'Inactivo']),

    validarCampos
], postServicio)

router.put('/', putServicio)

router.patch('/', patchServicio)

router.delete('/', deleteServicio)

//exportar módulo
module.exports = router