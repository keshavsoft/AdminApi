let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./UserFileAsFolder/Duplicate");
let CommonJsonItem = require("./UserFileAsFolder/JsonItem");

router.use("/Duplicate", CommonDuplicate)
router.use("/JsonItem", CommonJsonItem)

module.exports = router;
