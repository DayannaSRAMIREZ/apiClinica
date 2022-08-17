var express = require('express');
var router = express.Router();
const {list, create, update, destroy}= require('../../controllers/apis/pacientesControllerApi');
const verificacion= require('../../middlewares/auth')

/* GET home page. */
router
.get('/', list)
.post('/create',verificacion, create)
.put('/update/:id', verificacion, update )
.delete('/delete/:id',verificacion, destroy)

module.exports = router;
