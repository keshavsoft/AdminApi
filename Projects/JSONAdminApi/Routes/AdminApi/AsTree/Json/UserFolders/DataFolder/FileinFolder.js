let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./FileinFolder/Duplicate");
let CommonJsonItem = require("./FileinFolder/JsonItem");
let CommonCreateNew = require("./FileinFolder/CreateNew");
let CommonItemName = require("./FileinFolder/ItemName");

router.use("/Duplicate", CommonDuplicate);
router.use("/JsonItem", CommonJsonItem);
router.use("/CreateNew", CommonCreateNew);
router.use("/ItemName", CommonItemName);

module.exports = router;
