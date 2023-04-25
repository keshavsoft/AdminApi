let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./JsonItem/Duplicate");
let CommonJsonScreen = require("./JsonItem/JsonScreen");

router.use("/Duplicate", CommonDuplicate)
router.use("/JsonScreen", CommonJsonScreen)

module.exports = router;
