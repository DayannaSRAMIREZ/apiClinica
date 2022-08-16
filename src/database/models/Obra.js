
module.exports=(sequelize, dataTypes)=>{
const alias = "Obra"; 
const cols= {
id_obra: {
    type: dataTypes.INTEGER, 
    primaryKey: true, 
    allowNull: false, 
    autoincrement: true
}, 
nombre: {
    type: dataTypes.STRING(20), 
    allowNull: false
}, 
telefono: {
    type: dataTypes.STRING(15),
    allowNull: false
},
direccion: {
    type: dataTypes.STRING(20),
    allowNull: false
}

}; 
const config={
    tableName: "obra_social",
    timestamps: false
}


const Obra = sequelize.define(alias, cols, config); 
Obra.associate = function(models){
    Obra.hasMany(models.Paciente, {
        as: "pacientes", 
        foreignKey:"id_obra"
    })
   

}
return Obra

}