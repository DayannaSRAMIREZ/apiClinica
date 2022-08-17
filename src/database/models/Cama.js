module.exports=(sequelize, dataTypes)=>{
    const alias= "Cama"; 
    const cols= {
   
        fecha_ingreso: {
            type: dataTypes.DATEONLY,
            defaultValue: 0 
        },
        alta_aprox: {
            type: dataTypes.DATEONLY,
            defaultValue: 0 
        }, 
        id_habitacion:{
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        id_paciente: {
            type: dataTypes.INTEGER, 
            defaultValue: 0,
            allowNull: 0
        }, 
        id_doctor: {
            type: dataTypes.INTEGER, 
            defaultValue: 0 
        }
    }; 
    const config= {
        tableName: "camas", 
        timestamps: false 

    }; 
    const Cama = sequelize.define(alias, cols, config);
    Cama.associate = function(models){
        Cama.belongsTo(models.Doctor,{
            as: "doctores", 
            foreignKey: "id_doctor"
        })
        Cama.belongsTo(models.Habitacion,{
            as: "habitaciones", 
            foreignKey: "id_habitacion"
        })
        Cama.belongsTo(models.Paciente,{
            as: "pacientes", 
            foreignKey: "id_paciente"
        })
    }
    return Cama
}