const db = require('../database/models')
module.exports= {
    index: async(req,res)=>{
        try {
                   let departamentos = await db.Departamento.findAll({
                       include: ['especialidades', 'analisis']
                    }); 
                   let especialidades = await db.Especialidad.findAll({
                    include: ['departamentos', 'doctores']
                });
                   let doctores = await db.Doctor.findAll({
                    include: ['especialidades', 'turnos', 'analisis', 'camas']
                   });
                   let analisis = await db.Analisis.findAll({
                    include:['departamentos', 'pacientes']
                   });
                   let pacientes = await db.Paciente.findAll({
                    include: ['analisis', 'camas', 'obras', 'turnos']
                   }); 
                   let obraSocial= await db.Obra.findAll({
                    include: ['pacientes']
                   }); 
                   let habitaciones= await db.Habitacion.findAll({
                    include: ['camas']
                   }); 
                   let camas= await db.Cama.findAll({
                    include: ['pacientes', 'doctores', 'habitaciones']
                   }); 
                   let users= await db.User.findAll(); 


return res.send( users)
      
        } catch (error) {
            console.log(error);
        }

    }
}