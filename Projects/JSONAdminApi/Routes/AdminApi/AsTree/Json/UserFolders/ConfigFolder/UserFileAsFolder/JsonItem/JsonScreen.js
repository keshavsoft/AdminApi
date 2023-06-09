let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./JsonScreen/Duplicate");
let CommonCreateNew = require("./JsonScreen/CreateNew");
let CommonTableColumns = require("./JsonScreen/TableColumns");

router.use("/Duplicate", CommonDuplicate)
router.use("/CreateNew", CommonCreateNew)
router.use("/TableColumns", CommonTableColumns)

module.exports = router;
