module.exports = (sequelize, dataTypes)=> {
  const alias = "Habitacion";
  const cols = {

    enfermero_mañana: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    enfermero_tarde: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    enfermero_noche: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    cantidad_camas: {
      type: dataTypes.INTEGER,
      defaultValue: 0,
    }
  };
  const config = {
    tableName: "habitaciones",
    timestamps: false,
  };
  const Habitacion = sequelize.define(alias, cols, config);
  Habitacion.associate = function(models) {
    Habitacion.hasMany(models.Cama,{
        as: "camas", 
        foreignKey: "id_habitacion"
    })
  }
  return Habitacion;
};
