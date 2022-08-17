const db = require("../database/models")

module.exports={
  
 createTurno: async ({id_doctor, id_paciente, fecha})=>{

    return  await db.Turno.create({ id_paciente,id_doctor, fecha});
  ;
  },
 getAllTurnos : async () => {
    return await db.Turno.findAll( {include: ['doctores', 'pacientes']});
  },
  
 getTurnoById : async ({ id }) => {
    return await db.Turno.findOne({ where: { id } });
  },
  
editTurno : async (id,id_doctor, id_paciente, fecha) => {
    return  await db.Turno.update({ id_paciente,id_doctor, fecha}, { where: { id } });
 
  },
 turnoExists :async ({ id }) => {
    const turnoExists = await db.Turno.findByPk(id);
    return turnoExists ? turnoExists : null;
  },
  
 destroyTurno :async ({ id }) => {
    await db.Turno.destroy({ where: { id } });
  }
}