var express = require('express');
var router = express.Router();
const {create,list,destroy,update}= require('../../controllers/apis/obrasControllerApi');
const verificacion= require('../../middlewares/auth')

/* GET home page. */
router
.get('/', list)
.post('/', create)
.put('/:id',  update )
.delete('/:id', destroy)

module.exports = router;
