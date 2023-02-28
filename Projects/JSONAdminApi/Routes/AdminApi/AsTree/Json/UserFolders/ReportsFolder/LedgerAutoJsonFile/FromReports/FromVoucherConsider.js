let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./FromVoucherConsider/FromKeys");
let CommonDuplicate = require("./FromVoucherConsider/Duplicate");
let CommonFromJoinTablescolumns = require("./FromVoucherConsider/FromJoinTablesColumns");
let CommonFromJoinTables = require("./FromVoucherConsider/FromJoinTables");

router.use("/FromKeys", CommonFromKeys)
router.use("/Duplicate", CommonDuplicate)
router.use("/FromJoinTablesColumns", CommonFromJoinTablescolumns)
router.use("/FromJoinTables", CommonFromJoinTables)


module.exports = router;
