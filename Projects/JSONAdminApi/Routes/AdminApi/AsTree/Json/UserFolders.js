var express = require('express');
var router = express.Router();
let CommonScreensFromDisplayJson = require("./UserFolders/ScreensFromDisplayJson");
let CommonReportsFolder = require("./UserFolders/ReportsFolder");
let CommonConfigFolder = require("./UserFolders/ConfigFolder");

router.use('/ScreensFromDisplayJson', CommonScreensFromDisplayJson);
router.use('/ReportsFolder', CommonReportsFolder);
router.use('/ConfigFolder', CommonConfigFolder);

module.exports = router;