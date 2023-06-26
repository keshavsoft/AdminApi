let express = require("express");
let router = express.Router();

let CommonFromReports = require("./LedgerAutoJsonFile/FromReports");
let CommonVouchersConsider = require("./LedgerAutoJsonFile/VouchersConsider");
let CommonFromKeys = require("./LedgerAutoJsonFile/FromKeys");

router.use("/FromReports", CommonFromReports)
router.use("/VouchersConsider", CommonVouchersConsider)
router.use("/FromKeys", CommonFromKeys)


module.exports = router;
