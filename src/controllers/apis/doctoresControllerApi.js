const {createDoctor,getAllDoctors,getDoctorById, editDoctor, doctorExists, destroyDoctor}= require('../../services/doctorService')
const {response200, response500, response404}=require('../../services/response') 
module.exports= {
    list: async(req,res)=>{
        try {
            let doctores= await getAllDoctors()

            return res.status(200).json(response200(doctores))
        } catch (error) {
            return res.status(500).json(response500(error))
        }
    }, 
    create: async(req,res)=>{
        
      try {
      console.log(req.body);
        let doctor = await createDoctor(req.body); 
          return res.status(200).json(response200(doctor))
      } catch (error) {
          return res.status(500).json(response500(error))
      }
    }, 
    
    update: async(req,res)=>{

        try {
        const { id } = req.params;
        const doctor = await doctorExists({ id });
        if (!doctor) {
            return res.status(404).json(response404('Doctor'));
        }
        let { nombre, nacimiento, id_especialidad, telefono}= req.body; 
        
     await editDoctor(id, nombre, nacimiento, id_especialidad, telefono) 


        return res.status(200).json(response200(await doctorExists({ id })))
       } catch (error) {
        
        return res.status(500).json(response500(error))
     
       }
      
    },
    destroy: async(req,res)=>{
        const { id } = req.params;
        try {
          const doctor = await doctorExists({ id });
          if (!doctor) {
         
            return res.status(404).json(response404('Doctor'));
            
          }
          const doctorDeleted = await getDoctorById({ id }); 
          await destroyDoctor({ id });

          return res.status(200).json(response200(doctorDeleted));

        } catch (error) {

            return res.status(500).json(response500(error));
        }
    }
}