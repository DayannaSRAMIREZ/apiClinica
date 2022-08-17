const {createPaciente,getAllPacientes,getPacienteById, editPaciente, pacienteExists, destroyPaciente}= require('../../services/pacienteService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let pacientes= await getAllPacientes()
            return res.status(200).json(response200(pacientes))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
        
      try {
   
        let paciente = await createPaciente(req.body); 
          return res.status(200).json(response200(paciente))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const paciente = await pacienteExists({ id });
        if (!paciente) {
            return res.status(404).json(response404('Paciente'));
        }
        let { nombre,nacimiento,telefono,direccion, id_obra,id_cama}= req.body; 
        
        await editPaciente(id, nombre,nacimiento,telefono,direccion, id_obra,id_cama) 

        return res.status(200).json(response200(await pacienteExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const paciente = await pacienteExists({ id });
          if (!paciente) {
         
            return res.status(404).json(response404('Paciente'));
            
          }
          const pacienteDeleted = await getPacienteById({ id }); 
          await destroyPaciente({ id });

          return res.status(200).json(response200(pacienteDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));

        }
    }
}