const db = require('../../database/models')
const {createToken, comparePass, encryptPassword}= require('../../services/authServices')

module.exports = {
    register: async (req, res) => {

        try {

            let password= encryptPassword(req.body.password)
            let usuario=  await db.User.create({ name: req.body.name,email: req.body.email,password}); 
            let response = {
                ok: true,
                meta: {
                  status: 200,
                },
                data: usuario,
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
              if(comparePass(password, usuario.password)){
                    let token = createToken(usuario)
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