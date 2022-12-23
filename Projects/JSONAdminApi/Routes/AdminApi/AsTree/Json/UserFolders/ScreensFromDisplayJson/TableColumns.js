var express = require('express');
var router = express.Router();
let CommonSubKeys = require("./TableColumns/SubKeys");
let CommonToggles = require("./TableColumns/Toggles");
let CommonDataAttributes = require("./TableColumns/DataAttributes");


router.use('/SubKeys', CommonSubKeys);
router.use('/Toggles', CommonToggles);
router.use('/DataAttributes', CommonDataAttributes);

module.exports = router;