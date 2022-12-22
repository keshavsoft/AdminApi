var express = require('express');
var router = express.Router();
let CommonSubKeys = require("./TableColumns/SubKeys");
let CommonToggles = require("./TableColumns/Toggles");

router.use('/SubKeys', CommonSubKeys);
router.use('/Toggles', CommonToggles);

module.exports = router;