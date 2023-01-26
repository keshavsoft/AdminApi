let express = require("express");
let router = express.Router();

let CommonLedgerAutoJsonFile = require("./ReportsFolder/LedgerAutoJsonFile");

router.use("LedgerAutoJsonFile", CommonLedgerAutoJsonFile)

module.exports = router;
