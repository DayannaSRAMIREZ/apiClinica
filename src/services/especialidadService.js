
const db = require("../database/models")

module.exports={
  
 createEspecialidad: async ({ nombre, id_departamento})=>{
    return especialidad = await db.Especialidad.create({nombre, id_departamento});
  ;
  },
 getAllEspecialidades : async () => {
    return await db.Especialidad.findAll( {include: ['departamentos', 'doctores']});
  },
  
 getEspecialidadById : async ({ id }) => {
    return await db.Especialidad.findOne({ where: { id } });
  },
  
editEspecialidad : async (id, nombre, id_departamento) => {
    return especialidad = await db.Especialidad.update({ nombre, id_departamento}, { where: { id } });
 
  },
 especialidadExists :async ({ id }) => {
    const especialidadExists = await db.Especialidad.findByPk(id);
    return especialidadExists ? especialidadExists : null;
  },
  
 destroyEspecialidad :async ({ id }) => {
    await db.Especialidad.destroy({ where: { id } });
  }
}