var express = require('express');
var router = express.Router();
let CommonDefaultFocus = require("./TableRowOptions/DefaultFocus");
let CommonDelete = require("./TableRowOptions/Delete");
let CommonPopUp = require("./TableRowOptions/PopUp");
let CommonPrintToPrinter = require("./TableRowOptions/PrintToPrinter");
let CommonShow = require("./TableRowOptions/Show");
let CommonEdit = require("./TableRowOptions/Edit");

router.use('/DefaultFocus', CommonDefaultFocus);
router.use('/Delete', CommonDelete);
router.use('/PopUp', CommonPopUp);
router.use('/PrintToPrinter', CommonPrintToPrinter);
router.use('/Show', CommonShow);
router.use('/Edit', CommonEdit);

module.exports = router;