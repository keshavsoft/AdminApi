var express = require('express');
var router = express.Router();
let CommonSearchRowArray = require("./SubMenu/SearchRowArray");


router.use('/SearchRowArray', CommonSearchRowArray);



module.exports = router;