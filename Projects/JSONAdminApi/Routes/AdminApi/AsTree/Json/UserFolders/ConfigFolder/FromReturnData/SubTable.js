var express = require('express');
var router = express.Router();

let commonRow = require("./SubTable/Row")
let commonFooter = require("./SubTable/Footer")

router.use('/Row', commonRow);
router.use('/Footer', commonFooter);



module.exports = router;