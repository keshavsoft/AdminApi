let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./FromVoucherConsider/FromKeys");
let CommonDuplicate = require("./FromVoucherConsider/Duplicate");
let CommonFromJoinTablescolumns = require("./FromVoucherConsider/FromJoinTablesColumns");

router.use("/FromKeys", CommonFromKeys)
router.use("/Duplicate", CommonDuplicate)
router.use("/FromJoinTablesColumns", CommonFromJoinTablescolumns)


module.exports = router;
