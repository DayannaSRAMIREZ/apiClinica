const db = require("../database/models")

module.exports={
  
 createAnalisis: async ({ entregado,id_departamento, id_paciente, id_doctor})=>{
    return analisis = await db.Analisis.create({entregado,id_departamento, id_paciente, id_doctor});
  ;
  },
 getAllAnalisiss : async () => {
    return await db.Analisis.findAll();
  },
  
 getAnalisisById : async ({ id }) => {
    return await db.Analisis.findOne({ where: { id } });
  },
  
editAnalisis : async ({ id, entregado,id_departamento, id_paciente, id_doctor}) => {
  return analisis = await db.Analisis.update({ entregado,id_departamento, id_paciente, id_doctor}, { where: { id } });
   
  },
 analisisExists :async ({ id }) => {
    const analisisExists = await db.Analisis.findByPk(id);
    return analisisExists ? analisisExists : null;
  },
  
 destroyAnalisis :async ({ id }) => {
    await db.Analisis.destroy({ where: { id } });
  }
}