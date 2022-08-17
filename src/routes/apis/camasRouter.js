var express = require('express');
var router = express.Router();
const {list, create, update, destroy}= require('../../controllers/apis/camasControllerApi');
const verificacion= require('../../middlewares/auth')


router
    .get('/', list)
    .post('/',verificacion, create)
    .put('/:id', verificacion, update )
    .delete('/:id',verificacion, destroy)

module.exports = router;
