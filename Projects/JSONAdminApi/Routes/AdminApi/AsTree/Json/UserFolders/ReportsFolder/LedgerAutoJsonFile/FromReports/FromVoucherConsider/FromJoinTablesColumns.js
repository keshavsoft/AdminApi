let express = require("express");
let router = express.Router();

let CommonDisplayColumn = require("./FromJoinTablesColumns/DisplayColumn");
let CommonDuplicate = require("./FromJoinTablesColumns/Duplicate");



router.use("/DisplayColumn", CommonDisplayColumn)
router.use("/Duplicate", CommonDuplicate)


module.exports = router;
