var express = require('express');
var router = express.Router();
const {list, create, update, destroy}= require('../../controllers/apis/departamentosControllerApi');
const verificacion= require('../../middlewares/auth')

router
.get('/', list)
.post('/create',verificacion, create)
.put('/update/:id', verificacion, update )
.delete('/delete/:id',verificacion, destroy)


module.exports = router;
