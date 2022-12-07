const { Router } = require('express');
const router = Router(); // Obtener la funcion router
const { login } = require("../controller/auth")

router.post("/login", login)

module.exports = router
