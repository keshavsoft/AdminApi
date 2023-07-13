let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./FromVoucherConsider/FromKeys");
let CommonDuplicate = require("./FromVoucherConsider/Duplicate");
let CommonFromJoinTablescolumns = require("./FromVoucherConsider/FromJoinTablesColumns");
let CommonFromJoinTables = require("./FromVoucherConsider/FromJoinTables");
let CommonCreateNew = require("./FromVoucherConsider/CreateNew");

router.use("/FromKeys", CommonFromKeys)
router.use("/Duplicate", CommonDuplicate)
router.use("/FromJoinTablesColumns", CommonFromJoinTablescolumns)
router.use("/FromJoinTables", CommonFromJoinTables)
router.use("/CreateNew", CommonCreateNew)


module.exports = router;
