var express = require('express');
var router = express.Router();
const {list, create, update, destroy}= require('../../controllers/apis/turnosControllerApi');
const verificacion= require('../../middlewares/auth')

/* GET home page. */
router
.get('/', list)
.post('/', create)
.put('/:id',  update )
.delete('/:id', destroy)

module.exports = router;
