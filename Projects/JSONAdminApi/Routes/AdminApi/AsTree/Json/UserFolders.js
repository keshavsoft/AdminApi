var express = require('express');
var router = express.Router();
let CommonScreensFromDisplayJson = require("./UserFolders/ScreensFromDisplayJson");
let CommonReportsFolder = require("./UserFolders/ReportsFolder");
let CommonDuplicate = require("./UserFolders/Duplicate");

router.use('/ScreensFromDisplayJson', CommonScreensFromDisplayJson);
router.use('/ReportsFolder', CommonReportsFolder);
router.use('/Duplicate', CommonDuplicate);

module.exports = router;