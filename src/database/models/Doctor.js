
module.exports=(sequelize, dataTypes)=>{

    const alias = "Doctor"; 
    const cols= {
        
        nombre:{
            type: dataTypes.STRING(50),
            allowNull: false   
        },
        nacimiento:{
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        id_especialidad:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        telefono:{
            type : dataTypes.INTEGER,
            allowNull: true
        }
    
    }; 
    const config= {
        tableName: "doctores",
        timestamps: false
    }
    
    const Doctor = sequelize.define(alias, cols, config); 
    Doctor.associate = function(models) {
       
        
        Doctor.belongsTo(models.Especialidad, { 
            as: "especialidades", 
            foreignKey: "id_especialidad"
        }) 
        Doctor.hasMany(models.Turno, { 
            as: "turnos", 
            foreignKey: "id_doctor"
        }) 
        Doctor.hasMany(models.Cama, { 
            as: "camas", 
            foreignKey: "id_doctor"
        }) 
        Doctor.hasMany(models.Analisis, { 
            as: "analisis", 
            foreignKey: "id_doctor"
        }) 
     
    }
    return Doctor
    }
    
    
    
    
    