var express = require('express');
var router = express.Router();
let CommonSubKeys = require("./TableColumns/SubKeys");
let CommonToggles = require("./TableColumns/Toggles");
let CommonDataAttributes = require("./TableColumns/DataAttributes");
let CommonAllInOneWithValues = require("./TableColumns/AllInOneWithValues");
let CommonDefaultValue = require("./TableColumns/DefaultValue");





router.use('/SubKeys', CommonSubKeys);
router.use('/Toggles', CommonToggles);
router.use('/DataAttributes', CommonDataAttributes);
router.use('/AllInOneWithValues', CommonAllInOneWithValues);
router.use('/DefaultValue', CommonDefaultValue);





module.exports = router;