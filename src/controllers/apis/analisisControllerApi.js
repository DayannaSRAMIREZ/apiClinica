const db = require('../../database/models')
const {createAnalisis,getAllAnalisiss,getAnalisisById, editAnalisis, analisisExists, destroyAnalisis}= require('../../services/analisisService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let analisis = await getAllAnalisiss()
            return res.status(200).json(response200(analisis))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
        
      try {
      
        let analisis = await createAnalisis(req.body); 
          return res.status(200).json(response200(analisis))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{
   
        try {
        const { id } = req.params;
        const analisis = await analisisExists({ id });
        if (!analisis) {
            return res.status(404).json(response404('Analisis'));
        }
        let { entregado,id_departamento, id_paciente, id_doctor}= req.body; 
        
        let analisisUpdate = await editAnalisis(id,  entregado,id_departamento, id_paciente, id_doctor) 

        return res.status(200).json(response200(analisisUpdate))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
    }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const analisis = await analisisExists({ id });
          if (!analisis) {
            console.log('sdadad');
            return res.status(404).json(response404('Analisis'));
            
          }
          const analisisDeleted = await getAnalisisById({ id }); 
          await destroyAnalisis({ id });

          return res.status(200).json(response200(analisisDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));

        }
    }
}