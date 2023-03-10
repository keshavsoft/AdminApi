let express = require("express");
let router = express.Router();

let CommonFromAsTable = require("./FromReports/AsTable");
let CommonFromVoucherConsider = require("./FromReports/FromVoucherConsider");
let CommonVouchersConsider = require("./FromReports/VouchersConsider");
let CommonFromTableColumns = require("./FromReports/FromTableColumns");

let CommonColumns = require("./FromReports/Columns");


router.use("/AsTable", CommonFromAsTable)
router.use("/FromVoucherConsider", CommonFromVoucherConsider)
router.use("/VouchersConsider", CommonVouchersConsider)
router.use("/FromTableColumns", CommonFromTableColumns)

router.use("/Columns", CommonColumns)


module.exports = router;
