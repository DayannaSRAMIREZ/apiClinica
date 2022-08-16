const db = require('../../database/models')
module.exports= {
    list: async(req,res)=>{
        try {
            let analisis = await db.Analisis.findAll(); 
            res.send(analisis)

        } catch (error) {
            console.log(error);
        }

    }
}