
const db = require("../database/models")

module.exports={
  
 createObra: async ({ nombre, telefono, direccion})=>{
    return  await db.Obra.create({nombre, telefono, direccion});
  ;
  },
 getAllObras : async () => {
    return await db.Obra.findAll( {include: ['pacientes']});
  },
  
 getObraById : async ({ id }) => {
    return await db.Obra.findOne({ where: { id } });
  },
  
editObra : async (id, nombre, telefono, direccion) => {
    return  await db.Obra.update({ nombre, telefono, direccion}, { where: { id } });
 
  },
 obraExists :async ({ id }) => {
    const obraExists = await db.Obra.findByPk(id);
    return obraExists ? obraExists : null;
  },
  
 destroyObra :async ({ id }) => {
    await db.Obra.destroy({ where: { id } });
  }
}