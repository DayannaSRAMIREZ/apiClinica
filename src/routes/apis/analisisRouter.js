var express = require('express');
var router = express.Router();
const {list}= require('../../controllers/apis/analisisControllerApi');
const verificacion= require('../../middlewares/auth')

/* GET home page. */
router
    .get('/', verificacion, list)

module.exports = router;
