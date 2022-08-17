module.exports={
    response200: (data)=>{
        let response = {
            ok: true,
            meta: {
              status: 200,
            },
            data: data
          }
          return response
    },
    response500: (error)=>{
        let response = {
            ok: false,
            meta: {
              status: 500
            },
            msg: error.message ? error.message : "Comuniquese con el administrador del sitio."
          }
          return response
    },
    response404: (data)=>{
        let response ={
            ok: false, 
            meta: {
                status: 404, 
            },
            msg:`${data} no extiste.`
        }
        return response
    }
}