var express = require('express');
var router = express.Router();

let CommonCreateNew = require("./CreateNew/CreateNew");

router.use('/CreateNew', CommonCreateNew);



module.exports = router;