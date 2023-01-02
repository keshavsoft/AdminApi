var express = require('express');
var router = express.Router();
let CommonTableColumns = require("./ScreensFromDisplayJson/TableColumns");
let CommonTableInfo = require("./ScreensFromDisplayJson/TableInfo");

router.use('/TableColumns', CommonTableColumns);
router.use('/TableInfo', CommonTableInfo);

module.exports = router;