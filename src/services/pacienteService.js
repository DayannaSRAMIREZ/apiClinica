
const db = require("../database/models")

module.exports={
    
    
 createPaciente: async ({ nombre,nacimiento,telefono,direccion, id_obra,id_cama})=>{
    return  await db.Paciente.create({nombre,nacimiento,telefono,direccion, id_obra,id_cama});
  ;
  },
 getAllPacientes : async () => {
    return await db.Paciente.findAll( {include: ['analisis', 'camas', 'obras', 'turnos']});
  },
  
 getPacienteById : async ({ id }) => {
    return await db.Paciente.findOne({ where: { id } });
  },
  
editPaciente : async (id, nombre,nacimiento,telefono,direccion, id_obra,id_cama) => {
    return  await db.Paciente.update({ nombre,nacimiento,telefono,direccion, id_obra,id_cama}, { where: { id } });
 
  },
 pacienteExists :async ({ id }) => {
    const pacienteExists = await db.Paciente.findByPk(id);
    return pacienteExists ? pacienteExists : null;
  },
  
 destroyPaciente :async ({ id }) => {
    await db.Paciente.destroy({ where: { id } });
  }
}