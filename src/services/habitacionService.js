
const db = require("../database/models")

module.exports={
  
 createHabitacion: async ({ enfermero_mañana , enfermero_tarde, enfermero_noche, cantidad_camas})=>{
    return habitacion = await db.Habitacion.create({enfermero_mañana , enfermero_tarde, enfermero_noche, cantidad_camas});
  ;
  },
 getAllHabitaciones : async () => {
    return await db.Habitacion.findAll( {include: ['camas']});
  },
  
 getHabitacionById : async ({ id }) => {
    return await db.Habitacion.findOne({ where: { id } });
  },
  
editHabitacion : async (id, enfermero_mañana, enfermero_tarde, enfermero_noche, cantidad_Habitacions) => {
    return habitacion = await db.Habitacion.update({ enfermero_mañana, enfermero_tarde, enfermero_noche, cantidad_Habitacions}, { where: { id } });
 
  },
 habitacionExists :async ({ id }) => {
    const habitacionExists = await db.Habitacion.findByPk(id);
    return habitacionExists ? habitacionExists : null;
  },
  
 destroyHabitacion :async ({ id }) => {
    await db.Habitacion.destroy({ where: { id } });
  }
}