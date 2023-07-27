let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./FromTableColumns/FromKeys");
let CommonDuplicate = require("./FromTableColumns/Duplicate");
let CommonFromJoinTablescolumns = require("./FromTableColumns/FromJoinTablesColumns");
let CommonFromJoinTables = require("./FromTableColumns/FromJoinTables");
let CommonFromSubKeys = require("./FromTableColumns/SubKeys");

router.use("/FromKeys", CommonFromKeys)
router.use("/Duplicate", CommonDuplicate)
router.use("/FromJoinTablesColumns", CommonFromJoinTablescolumns)
router.use("/FromJoinTables", CommonFromJoinTables)
router.use("/SubKeys", CommonFromSubKeys)


module.exports = router;
