
module.exports= (sequelize, dataTypes)=>{
    const alias= "Paciente";
    const cols={
      
        nombre: {
            type: dataTypes.STRING(50), 
            allowNull: false, 
        },
        nacimiento:{
            type: dataTypes.DATEONLY, 
            allowNull: false

        }, 
        telefono:{
            type: dataTypes.INTEGER,
            allowNull: false

        }, 
        direccion:{
            type: dataTypes.STRING(50),
            allowNull: false

        }, 
        id_obra:{
            type: dataTypes.INTEGER, 
            allowNull: false

        }, 
        id_cama:{
            type: dataTypes.INTEGER, 
            defaultValue: 0
        }

    }; 
    const config={
        tableName: "pacientes",
        timestamps: false

    }; 
    const Paciente= sequelize.define(alias, cols, config); 
    Paciente.associate= function(models){
        Paciente.belongsTo(models.Obra, {
            as:"obras", 
            foreignKey: "id_obra"
        })
        Paciente.belongsTo(models.Cama, {
            as:"camas", 
            foreignKey: "id_cama"
        })
        Paciente.hasMany(models.Analisis,{
            as: "analisis", 
            foreignKey: "id_paciente"
        })
        Paciente.hasMany(models.Turno,{
            as: "turnos",
            foreignKey: "id_paciente"
        })
    }
    return Paciente
}