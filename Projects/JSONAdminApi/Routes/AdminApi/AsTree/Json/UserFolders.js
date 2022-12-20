var express = require('express');
var router = express.Router();
let CommonScreensFromDisplayJson = require("./Folders/ScreensFromDisplayJson");

router.use('/ScreensFromDisplayJson', CommonScreensFromDisplayJson);

module.exports = router;