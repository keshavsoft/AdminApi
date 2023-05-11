var express = require('express');
var router = express.Router();

let commonFooter = require("./Vertical/Footer")

router.use('/Footer', commonFooter);



module.exports = router;