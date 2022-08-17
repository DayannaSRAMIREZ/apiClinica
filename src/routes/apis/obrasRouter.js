var express = require('express');
var router = express.Router();
const {create,list,destroy,update}= require('../../controllers/apis/obrasControllerApi');
const verificacion= require('../../middlewares/auth')


router
.get('/', list)
.post('/create',verificacion, create)
.put('/update/:id', verificacion, update )
.delete('/delete/:id',verificacion, destroy)


module.exports = router;
