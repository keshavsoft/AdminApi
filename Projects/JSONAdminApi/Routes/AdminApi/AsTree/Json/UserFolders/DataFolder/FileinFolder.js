let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./FileinFolder/Duplicate");
let CommonJsonItem = require("./FileinFolder/JsonItem");


router.use("/Duplicate", CommonDuplicate)
router.use("/JsonItem", CommonJsonItem)


module.exports = router;
