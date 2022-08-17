module.exports=(sequelize, dataTypes)=>{
    const alias= "Turno"; 
    const cols= {
      
        id_paciente :{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_doctor: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        fecha:{
            type: dataTypes.DATEONLY,
            allowNull: false
        }
       
    }; 
    const config= {
        tableName: "turnos", 
        timestamps: false 
    }; 
    const Turno = sequelize.define(alias, cols, config);
    
    Turno.associate= function(models){
        Turno.belongsTo(models.Doctor, {
            as: "doctores", 
            foreignKey: "id_doctor"
        })
        Turno.belongsTo(models.Paciente, {
            as: "pacientes", 
            foreignKey: "id_paciente"
        })

    }
    return Turno
}