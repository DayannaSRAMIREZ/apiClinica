
const db = require("../database/models")

module.exports={
  
 createDoctor: async ({nombre, nacimiento, id_especialidad, telefono})=>{
    return Doctor = await db.Doctor.create({nombre, nacimiento, id_especialidad, telefono});
  ;
  },
 getAllDoctors : async () => {
    return await db.Doctor.findAll( {include: ['especialidades', 'turnos', 'analisis', 'camas']});
  },
  
 getDoctorById : async ({ id }) => {
    return await db.Doctor.findOne({ where: { id } });
  },
  
editDoctor : async (id, nombre, nacimiento, id_especialidad, telefono) => {
    return Doctor = await db.Doctor.update({ nombre, nacimiento, id_especialidad, telefono}, { where: { id } });
 
  },
 doctorExists :async ({ id }) => {
    const doctorExists = await db.Doctor.findByPk(id);
    return doctorExists ? doctorExists : null;
  },
  
 destroyDoctor :async ({ id }) => {
    await db.Doctor.destroy({ where: { id } });
  }
}