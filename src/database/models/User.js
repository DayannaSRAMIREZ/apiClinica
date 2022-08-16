

module.exports=(sequelize, dataTypes)=>{

    const alias = "User"; 
    const cols= {
    
        name:{
            type: dataTypes.STRING(100),
            allowNull: false,
           
        },
        password:{
            type: dataTypes.STRING(100),
            allowNull: true, 
        },
       email:{
            type: dataTypes.STRING(100),
            allowNull: true, 
            defaultValue: 0
        }
    
    }; 
    const config= {
        tableName: "users",
        timestamps: false
    }
    
    const User = sequelize.define(alias, cols, config); 
    
    return User
    }
    
    
    
    
    