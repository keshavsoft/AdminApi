let express = require("express");
let router = express.Router();

let CommonFromReports = require("./LedgerAutoJsonFile/FromReports");
let CommonVouchersConsider = require("./LedgerAutoJsonFile/VouchersConsider");

router.use("/FromReports", CommonFromReports)
router.use("/VouchersConsider", CommonVouchersConsider)


module.exports = router;
