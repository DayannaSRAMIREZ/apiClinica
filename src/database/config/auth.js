require('dotenv').config()
module.exports={
    rounds: process.env.ROUNDS || 10,
    secret: process.env.SECRET || "secret", 
    expires: process.env.EXPIRES || '10d', 

}