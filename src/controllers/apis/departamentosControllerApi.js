const {createDepartamento,getAllDepartamentos,getDepartamentoById, editDepartamento, departamentoExists, destroyDepartamento}= require('../../services/departamentoService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let departmentos= await getAllDepartamentos()
            return res.status(200).json(response200(departmentos))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
        
      try {
      
        let departamento = await createDepartamento(req.body); 
          return res.status(200).json(response200(departamento))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const departamento = await departamentoExists({ id });
        if (!departamento) {
            return res.status(404).json(response404('departamento'));
        }
        let { nombre, Jefe_departamento}= req.body; 
        
     await editDepartamento(id, nombre, Jefe_departamento) 


        return res.status(200).json(response200(await departamentoExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const cama = await departamentoExists({ id });
          if (!cama) {
         
            return res.status(404).json(response404('cama'));
            
          }
          const departamentoDeleted = await getDepartamentoById({ id }); 
          await destroyDepartamento({ id });

          return res.status(200).json(response200(departamentoDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));

        }
    }
}