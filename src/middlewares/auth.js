const jwt = require('jsonwebtoken');
const {
    secret
} = require('../database/config/auth');
module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) {
        let response = {
            ok: false,
            meta: {
                status: 401
            },
            msg: "Acceso no autorizado"
        }
        return res.status(401).json(response)

    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);

    }
    if (token) {
        jwt.verify(token, secret, (error, decoded) => {
            if (error) {
                let response = {
                    ok: false,
                    meta: {
                        status: 500
                    },
                    msg: "Problema al decodificar token"
                }
                return res.status(500).json(response)

            } else {
             
                req.user = decoded
                next();
            }
        })
    }
}