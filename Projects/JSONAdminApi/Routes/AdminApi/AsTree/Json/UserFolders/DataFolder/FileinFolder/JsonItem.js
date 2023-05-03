let express = require("express");
let router = express.Router();

let CommonJsonItem = require("./JsonItem/Duplicate");

router.use("/Duplicate", CommonJsonItem)

module.exports = router;
