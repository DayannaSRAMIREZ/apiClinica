
const db = require("../database/models")

module.exports={
  
 createDepartamento: async ({ nombre, Jefe_departamento})=>{
    return departamento = await db.Departamento.create({nombre, Jefe_departamento});
  ;
  },
 getAllDepartamentos : async () => {
    return await db.Departamento.findAll( {include: ['especialidades', 'analisis']});
  },
  
 getDepartamentoById : async ({ id }) => {
    return await db.Departamento.findOne({ where: { id } });
  },
  
editDepartamento : async (id, nombre, Jefe_departamento) => {
    return Departamento = await db.Departamento.update({nombre, Jefe_departamento}, { where: { id } });
 
  },
 departamentoExists :async ({ id }) => {
    const departamentoExists = await db.Departamento.findByPk(id);
    return departamentoExists ? departamentoExists : null;
  },
  
 destroyDepartamento :async ({ id }) => {
    await db.Departamento.destroy({ where: { id } });
  }
}