// instalar con npm i jsonwebtoken

const jwt = require ("jsonwebtoken")

const generarJWT = (uid = "") => {
    return new Promise((resolve, reject) => {
        const payload = {uid}

        jwt.sign(payload, process.env.SECRECTKEY, {
            expiresIn : "1h",
        },(err,token) => {
            if(err){
                reject("error generando el token")
            }
            else{
                resolve(token)
            }

        })
    })
    
}

module.exports = {
    generarJWT
}