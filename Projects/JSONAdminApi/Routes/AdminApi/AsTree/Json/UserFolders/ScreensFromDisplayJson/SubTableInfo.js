var express = require('express');
var router = express.Router();
let CommonToggles = require("./SubTableInfo/Toggles");


router.use('/Toggles', CommonToggles);

module.exports = router;