let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./LedgerAutoJsonFile/FromKeys");
let CommonColumns = require("./LedgerAutoJsonFile/Columns");

let CommonAsTable = require("./LedgerAutoJsonFile/AsTable");
let CommonVouchersConsider = require("./LedgerAutoJsonFile/VouchersConsider");

router.use("/FromKeys", CommonFromKeys)
router.use("/Columns", CommonColumns)

router.use("/AsTable", CommonAsTable)
router.use("/VouchersConsider", CommonVouchersConsider)

module.exports = router;
