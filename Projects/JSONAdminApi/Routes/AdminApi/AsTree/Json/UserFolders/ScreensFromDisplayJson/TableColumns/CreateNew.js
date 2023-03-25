var express = require('express');
var router = express.Router();

let CommonDuplicateScreen = require("./CreateNew/DuplicateScreen");

router.use('/DuplicateScreen', CommonDuplicateScreen);

module.exports = router;