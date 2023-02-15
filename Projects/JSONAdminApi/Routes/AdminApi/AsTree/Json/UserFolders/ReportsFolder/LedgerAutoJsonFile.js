let express = require("express");
let router = express.Router();

let CommonFromReports = require("./LedgerAutoJsonFile/FromReports");
;

router.use("/FromReports", CommonFromReports)


module.exports = router;
