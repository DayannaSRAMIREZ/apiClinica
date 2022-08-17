
const db = require("../database/models")

module.exports={
  
 createCama: async ({ entregado,id_departamento, id_paciente, id_doctor})=>{
    return cama = await db.Cama.create({entregado,id_departamento, id_paciente, id_doctor});
  ;
  },
 getAllCamas : async () => {
    return await db.Cama.findAll( {include: ['pacientes', 'doctores', 'habitaciones']});
  },
  
 getCamaById : async ({ id }) => {
    return await db.Cama.findOne({ where: { id } });
  },
  
editCama : async (id, entregado,id_departamento, id_paciente, id_doctor) => {
    return cama = await db.Cama.update({ entregado,id_departamento, id_paciente, id_doctor}, { where: { id } });
 
  },
 camaExists :async ({ id }) => {
    const camaExists = await db.Cama.findByPk(id);
    return camaExists ? camaExists : null;
  },
  
 destroyCama :async ({ id }) => {
    await db.Cama.destroy({ where: { id } });
  }
}