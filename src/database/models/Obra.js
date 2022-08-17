
module.exports=(sequelize, dataTypes)=>{
const alias = "Obra"; 
const cols= {
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
    timestamps: false,
    primaryKey: 'id_obra'
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