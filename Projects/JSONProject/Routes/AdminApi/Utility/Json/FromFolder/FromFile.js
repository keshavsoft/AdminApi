let express = require('express');
let router = express.Router();

let commonScreensFromDisplayJson = require("./FromFile/ScreensFromDisplayJson")

router.use('/ScreensFromDisplayJson', commonScreensFromDisplayJson);

module.exports = router;