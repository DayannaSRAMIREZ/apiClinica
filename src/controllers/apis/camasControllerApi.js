const {createCama,getAllCamas,getCamaById, editCama, camaExists, destroyCama}= require('../../services/camaService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            
            let camas= await getAllCamas()
            return res.status(200).json(response200(camas))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
        
      try {
      
        let cama = await createCama(req.body); 
          return res.status(200).json(response200(cama))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const cama = await camaExists({ id });
        if (!cama) {
            return res.status(404).json(response404('cama'));
        }
        let { entregado,id_departamento, id_paciente, id_doctor}= req.body; 
        
     await editCama(id, entregado,id_departamento, id_paciente, id_doctor) 


        return res.status(200).json(response200(await camaExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const cama = await camaExists({ id });
          if (!cama) {
         
            return res.status(404).json(response404('cama'));
            
          }
          const camaDeleted = await getCamaById({ id }); 
          await destroyCama({ id });

          return res.status(200).json(response200(camaDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));

        }
    }
}