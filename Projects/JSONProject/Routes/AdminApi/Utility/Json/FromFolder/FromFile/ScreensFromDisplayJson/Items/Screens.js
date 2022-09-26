let express = require('express');
let router = express.Router();

let commonInsert = require("./Screens/Insert")

router.use('/Insert', commonInsert);

module.exports = router;