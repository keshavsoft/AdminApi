let express = require("express");
let router = express.Router();

let CommonVertical = require("./FromReturnData/Vertical");

router.use("/Vertical", CommonVertical)

module.exports = router;
