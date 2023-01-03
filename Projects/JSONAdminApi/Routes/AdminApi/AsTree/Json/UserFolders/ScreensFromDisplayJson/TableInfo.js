var express = require('express');
var router = express.Router();
let CommonTableInfo = require("./TableInfo/FromKeys");
router.use('/FromKeys', CommonTableInfo);



module.exports = router;