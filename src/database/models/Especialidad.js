
module.exports=(sequelize, dataTypes)=>{

    const alias = "Especialidad"; 
    const cols= {
        id_especialidad: {
            type: dataTypes.INTEGER, 
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
            unique: true
        },
        nombre:{
            type: dataTypes.STRING(50),
            allowNull: false,
           
        },
        id_departamento:{
            type: dataTypes.INTEGER,
            allowNull: false, 
        }
    
    }; 
    const config= {
        tableName: "especialidades",
        timestamps: false
    }
    
    const Especialidad = sequelize.define(alias, cols, config); 


    Especialidad.associate = function(models) {
       
        Especialidad.belongsTo(models.Departamento, { 
            as: "departamentos", 
            foreignKey: "id_departamento"
        }) 
        Especialidad.hasMany(models.Doctor, {
            as: "doctores", 
            foreignKey: "id_especialidad"
        })
    }
    return Especialidad
    }
    
    
    
    