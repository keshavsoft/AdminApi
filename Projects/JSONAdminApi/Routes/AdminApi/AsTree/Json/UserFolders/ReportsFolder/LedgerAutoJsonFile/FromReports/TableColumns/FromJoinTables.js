let express = require("express");
let router = express.Router();

let CommonDisplayColumn = require("./FromJoinTables/JsonConfig");
let CommonDuplicate = require("./FromJoinTables/Duplicate");



router.use("/JsonConfig", CommonDisplayColumn)
router.use("/Duplicate", CommonDuplicate)


module.exports = router;
