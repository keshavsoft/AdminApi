var express = require('express');
var router = express.Router();

let commonFooter = require("./Table/Footer")
let commonRow = require("./Table/Row")

router.use('/Footer', commonFooter);
router.use('/Row', commonRow);



module.exports = router;