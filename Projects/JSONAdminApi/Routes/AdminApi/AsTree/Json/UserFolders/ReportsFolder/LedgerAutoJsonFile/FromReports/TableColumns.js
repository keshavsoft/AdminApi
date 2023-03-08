let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./TableColumns/FromKeys");
let CommonDuplicate = require("./TableColumns/Duplicate");
let CommonFromJoinTablescolumns = require("./TableColumns/FromJoinTablesColumns");
let CommonFromJoinTables = require("./TableColumns/FromJoinTables");

router.use("/FromKeys", CommonFromKeys)
router.use("/Duplicate", CommonDuplicate)
router.use("/FromJoinTablesColumns", CommonFromJoinTablescolumns)
router.use("/FromJoinTables", CommonFromJoinTables)


module.exports = router;
