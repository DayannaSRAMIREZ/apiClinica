

module.exports=(sequelize, dataTypes)=>{

    const alias = "Analisis"; 
    const cols= {
        nro_analisis: {
            type: dataTypes.INTEGER, 
            allowNull: false,
            autoincrement: true,
            primaryKey: true
        },
        entregado:{
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
           
        },
        id_departamento:{
            type: dataTypes.INTEGER,
            allowNull: true, 
        },
        id_paciente:{
            type: dataTypes.INTEGER,
            allowNull: true, 
            defaultValue: 0
        },
        id_doctor:{
            type: dataTypes.INTEGER,
            allowNull: true, 
        }
    
    }; 
    const config= {
        tableName: "analisis",
        timestamps: false
    }
    
    const Analisis = sequelize.define(alias, cols, config); 
    Analisis.associate = function(models) {
        Analisis.belongsTo(models.Doctor, { 
            as: "doctores",
            foreignKey: "id_doctor"
        }) 
        Analisis.belongsTo(models.Departamento, { 
            as: "departamentos",
            foreignKey: "id_departamento"
        }) 
     
        Analisis.belongsTo(models.Paciente, { 
            as: "pacientes",
            foreignKey: "id_paciente"
        }) 
      
      
    }
    
    return Analisis
    }
    
    
    
    
    