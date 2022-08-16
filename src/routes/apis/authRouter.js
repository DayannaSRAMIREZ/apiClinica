const express= require('express'); 
const router= express.Router(); 
const {register, login}= require('../../controllers/apis/authController'); 


router
    .post('/login', login)
    .post('/register', register)

module.exports= router; 