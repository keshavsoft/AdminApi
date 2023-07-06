var express = require('express');
var router = express.Router();

var CommonGetFoldersAsArray = require("./FromData/GetFoldersAsArray");

router.use('/GetFoldersAsArray', CommonGetFoldersAsArray);

module.exports = router;