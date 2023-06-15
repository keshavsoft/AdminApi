var express = require('express');
var router = express.Router();
let CommonButton = require("./Button/NewWindow");
let CommonPopUp = require("./Button/PopUp");

router.use('/NewWindow', CommonButton);
router.use('/PopUp', CommonPopUp);

module.exports = router;