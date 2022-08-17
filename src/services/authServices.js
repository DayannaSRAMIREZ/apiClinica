const { expires,secret,rounds} = require('../database/config/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports={
    createToken:(info)=>{
        let token = jwt.sign({info},secret, {
            expiresIn: expires
        }); 
        return token
    },
    encryptPassword:(pass)=>{
        let password = bcrypt.hashSync(pass, +rounds)
    return password

    }, 
    comparePass: (pass, passDB)=>{
        return bcrypt.compareSync(pass,passDB)
    }
   
}