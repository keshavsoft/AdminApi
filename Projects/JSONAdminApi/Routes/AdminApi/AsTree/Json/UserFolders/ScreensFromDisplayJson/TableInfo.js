var express = require('express');
var router = express.Router();
let CommonTableInfo = require("./TableInfo/FromKeys");
let CommonToggles = require("./TableInfo/Toggles");

router.use('/FromKeys', CommonTableInfo);
router.use('/Toggles', CommonToggles);



module.exports = router;