const db = require('../../database/models')
const {createTurno,getAllTurnos,getTurnoById, editTurno, turnoExists, destroyTurno}= require('../../services/turnoService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let turnos= await getAllTurnos()
            return res.status(200).json(response200(turnos))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
        
      try {
      
        let turno = await createTurno(req.body); 
          return res.status(200).json(response200(turno))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const turno = await turnoExists({ id });
        if (!turno) {
            return res.status(404).json(response404('turno'));
        }
        let { id_doctor, id_paciente, fecha}= req.body; 
        
     await editTurno(id, id_doctor, id_paciente, fecha) 


        return res.status(200).json(response200(await turnoExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const turno = await turnoExists({ id });
          if (!turno) {
         
            return res.status(404).json(response404('turno'));
            
          }
          const turnoDeleted = await getTurnoById({ id }); 
          await destroyTurno({ id });

          return res.status(200).json(response200(turnoDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));

        }
    }
}