let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./UserFileAsFolder/Duplicate");
let CommonJsonItem = require("./UserFileAsFolder/JsonItem");
let CommonCreateNew = require("./UserFileAsFolder/CreateNew");

router.use("/Duplicate", CommonDuplicate);
router.use("/JsonItem", CommonJsonItem);
router.use("/CreateNew", CommonCreateNew);

module.exports = router;