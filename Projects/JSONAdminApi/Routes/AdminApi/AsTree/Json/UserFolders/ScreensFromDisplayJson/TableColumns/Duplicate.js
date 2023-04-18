var express = require('express');
var router = express.Router();
let CommonDuplicateItem = require("./Duplicate/DuplicateItem");
let CommonDuplicateFolder = require("./Duplicate/DuplicateFolder");

router.use('/DuplicateItem', CommonDuplicateItem);
router.use('/DuplicateFolder', CommonDuplicateFolder);

module.exports = router;