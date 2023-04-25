let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./JsonScreen/Duplicate");

router.use("/Duplicate", CommonDuplicate)

module.exports = router;
