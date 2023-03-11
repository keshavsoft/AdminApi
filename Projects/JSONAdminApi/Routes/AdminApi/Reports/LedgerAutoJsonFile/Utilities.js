let express = require('express');
let router = express.Router();

let Commonimport = require("./Utilities/import");


router.use('/import', Commonimport);

module.exports = router;