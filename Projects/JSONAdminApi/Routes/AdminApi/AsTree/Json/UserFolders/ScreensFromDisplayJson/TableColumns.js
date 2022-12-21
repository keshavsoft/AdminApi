var express = require('express');
var router = express.Router();
let CommonSubKeys = require("./TableColumns/SubKeys");

router.use('/SubKeys', CommonSubKeys);

module.exports = router;