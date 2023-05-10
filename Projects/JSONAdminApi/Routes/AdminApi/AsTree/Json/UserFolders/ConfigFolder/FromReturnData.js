let express = require("express");
let router = express.Router();

let CommonTable = require("./FromReturnData/Table");

router.use("/Table", CommonTable)

module.exports = router;
