var express = require('express');
var router = express.Router();

// router.use('/ShowData', require('./TableColumns/ShowData'));
// router.use('/Update', require('./TableColumns/Update'));
let CommonServer = require("./TableColumns/ServerSide")

router.use('/UpdateKeys', require('./TableColumns/UpdateKeys'));
router.use('/ServerSide', CommonServer);


module.exports = router;