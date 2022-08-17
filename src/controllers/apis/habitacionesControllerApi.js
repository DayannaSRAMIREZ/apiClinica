const {createHabitacion,getAllHabitaciones,getHabitacionById, editHabitacion, habitacionExists, destroyHabitacion}= require('../../services/habitacionService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let habitaciones= await getAllHabitaciones()
            return res.status(200).json(response200(habitaciones))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
      try {
      
        let habitacion = await createHabitacion(req.body); 
          return res.status(200).json(response200(habitacion))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const habitacion = await habitacionExists({ id });
        if (!habitacion) {
            return res.status(404).json(response404('Habitacion'));
        }
        let { enfermero_mañana, enfermero_tarde, enfermero_noche, cantidad_camas}= req.body; 
        
     await editHabitacion(id, enfermero_mañana, enfermero_tarde, enfermero_noche, cantidad_camas) 


        return res.status(200).json(response200(await habitacionExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const habitacion = await habitacionExists({ id });
          if (!habitacion) {
         
            return res.status(404).json(response404('Habitacion'));
            
          }
          const habitacionDeleted = await getHabitacionById({ id }); 
          await destroyHabitacion({ id });

          return res.status(200).json(response200(habitacionDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));

        }
    }
}