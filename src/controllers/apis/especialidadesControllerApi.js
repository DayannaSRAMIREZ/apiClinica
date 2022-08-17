const {createEspecialidad,getAllEspecialidades,getEspecialidadById, editEspecialidad, especialidadExists, destroyEspecialidad}= require('../../services/especialidadService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let especialidades= await getAllEspecialidades()

            return res.status(200).json(response200(especialidades))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
        
      try {
      console.log(req.body);
        let especialidad = await createEspecialidad(req.body); 
          return res.status(200).json(response200(especialidad))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const especialidad = await especialidadExists({ id });
        if (!especialidad) {
            return res.status(404).json(response404('Especialidad'));
        }
        let { nombre,id_departamento}= req.body; 
        
     await editEspecialidad(id, nombre,id_departamento) 


        return res.status(200).json(response200(await especialidadExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const especialidad = await especialidadExists({ id });
          if (!especialidad) {
         
            return res.status(404).json(response404('Especialidad'));
            
          }
          const especialidadDeleted = await getEspecialidadById({ id }); 
          await destroyEspecialidad({ id });

          return res.status(200).json(response200(especialidadDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));
        }
    }
}