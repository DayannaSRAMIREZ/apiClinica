const {createObra,getAllObras,getObraById, editObra, obraExists, destroyObra}= require('../../services/obraService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let obras= await getAllObras()
            return res.status(200).json(response200(obras))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
      try {
      
        let obra = await createObra(req.body); 
          return res.status(200).json(response200(obra))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const obra = await obraExists({ id });
        if (!obra) {
            return res.status(404).json(response404('Obra'));
        }
        let { nombre, telefono, direccion}= req.body; 
        
     await editObra(id, nombre, telefono, direccion) 


        return res.status(200).json(response200(await obraExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const obra = await obraExists({ id });
          if (!obra) {
         
            return res.status(404).json(response404('Obra'));
            
          }
          const obraDeleted = await getObraById({ id }); 
          await destroyObra({ id });

          return res.status(200).json(response200(obraDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));

        }
    }
}