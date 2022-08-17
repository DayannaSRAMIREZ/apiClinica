
module.exports=(sequelize, dataTypes)=>{

const alias = "Departamento"; 
const cols= {

    nombre:{
        type: dataTypes.STRING(50),
        allowNull: false,
        unique: true
       
    },
    Jefe_departamento:{
        type: dataTypes.STRING(50),
        allowNull: true, 
        defaultValue: 0
    }
    

}; 
const config= {
    tableName: "departamentos",
    timestamps: false
}

const Departamento = sequelize.define(alias, cols, config); 

Departamento.associate = function(models) {
    Departamento.hasMany(models.Especialidad, { 
        as: "especialidades",
        foreignKey: "id_departamento"
    }) 
    Departamento.hasMany(models.Analisis, { 
        as: "analisis",
        foreignKey: "id_departamento"
    }) 
  
}
return Departamento
}




