let express = require('express');
let router = express.Router();

let CommonUtilities = require("./LedgerAutoJsonFile/Utilities");


router.use('/Utilities', CommonUtilities);

module.exports = router;