var express = require('express');
var router = express.Router();
let CommonDuplicateItem = require("./Duplicate/DuplicateItem");

router.use('/DuplicateItem', CommonDuplicateItem);

module.exports = router;