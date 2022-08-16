const db = require('../../database/models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { expires,secret,rounds } = require('../../database/config/auth');

module.exports = {
    register: async (req, res) => {

        try {
            let password = bcrypt.hashSync(req.body.password, +rounds)
            let usuario=  await db.User.create({ name: req.body.name,email: req.body.email,password}); 
            let token = jwt.sign({user:usuario},secret, {
                expiresIn: expires
            })

            let response = {
                ok: true,
                meta: {
                  status: 200,
                },
                data: usuario,
                token
              }
              return res.status(200).json(response)
       

        } catch (error) {
            let response = {
                ok: false,
                meta: {
                  status: 500
                },
                msg: error.message ? error.message : "comuniquese con el administrador del sitio"
              }
              return res.status(500).json(response)
            
        }


    },
    login: async(req, res) => {
        try {
            let{email,password}=req.body;
            let usuario = await db.User.findOne({
                where:{
                    email: email
                }
            })
            if(!usuario){
                let response = {
                    ok: false,
                    meta: {
                      status: 404
                    },
                    msg: error.message ? error.message : "Usuario inexistente"
                  }
                  return res.status(404).json(response)
            }else{
                if(bcrypt.compareSync(password,usuario.password)){
                    let token = jwt.sign({user:usuario},secret, {
                        expiresIn: expires
                    })
                    let response = {
                        ok: true,
                        meta: {
                          status: 200,
                        },
                        data: usuario.name,
                        token
                      }
                      return res.status(200).json(response)
               
                }else{
                    let response = {
                        ok: false,
                        meta: {
                          status: 401
                        },
                        msg: error.message ? error.message : "Contraseña incorrecta"
                      }
                      return res.status(401).json(response)
                }

            }
        } catch (error) {
            let response = {
                ok: false,
                meta: {
                  status: 500
                },
                msg: error.message ? error.message : "comuniquese con el administrador del sitio"
              }
              return res.status(500).json(response)
        }
        


    }
}