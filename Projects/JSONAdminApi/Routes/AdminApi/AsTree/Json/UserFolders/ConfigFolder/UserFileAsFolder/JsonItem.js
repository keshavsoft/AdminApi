let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./JsonItem/Duplicate");
let CommonJsonScreen = require("./JsonItem/JsonScreen");
let CommonCreateNew = require("./JsonItem/CreateNew");

router.use("/Duplicate", CommonDuplicate)
router.use("/JsonScreen", CommonJsonScreen)
router.use("/CreateNew", CommonCreateNew)

module.exports = router;
