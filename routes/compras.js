const { Router } = require('express');
const { check } = require("express-validator")
const router = Router(); // Obtener la funcion router

const { validarCampos } = require("../middlewares/validar-campos")

const { getCompra, postCompra, putCompra, patchCompra, deleteCompra } = require("../controller/compras")

router.get('/', getCompra)

router.post('/', [
    check('Id', 'El campo Id es obligatorio').not().isEmpty(),
    check('Producto', 'El campo Producto es obligatorio').not().isEmpty(),
    check('FechaCompra', 'El campo Fecha de compra es obligatorio').not().isEmpty(),
    check('Proveedor', 'El campo Proveedor es obligatorio').not().isEmpty(),
    check('Total', 'El campo Total es obligatorio').not().isEmpty(),
    check('Estado', 'El campo Estado es obligatorio').not().isEmpty(),
    check('Estado', 'Ingrese un estado válido').isIn(['Activo', 'Inactivo']),

    validarCampos
], postCompra)

router.put('/', putCompra)

router.patch('/', patchCompra)

router.delete('/', deleteCompra)

//exportar módulo
module.exports = router