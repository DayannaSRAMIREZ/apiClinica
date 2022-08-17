const db = require('../../database/models')
const {createToken, comparePass, encryptPassword}= require('../../services/authServices'); 
const {response200, response500, response404}=require('../../services/response') 

module.exports = {
    register: async (req, res) => {

        try {
            let password= encryptPassword(req.body.password)
            await db.User.create({ name: req.body.name,email: req.body.email,password}); 
         
             return res.status(200).json(response200('Usuario creado'))

        } catch (error) {
         
              return res.status(500).json(response500(error))
            
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
                    let token = createToken(usuario.email)
             
                     return res.status(200).json(response200(token))
               
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

          return res.status(500).json(response500(error))

        }
    }
}