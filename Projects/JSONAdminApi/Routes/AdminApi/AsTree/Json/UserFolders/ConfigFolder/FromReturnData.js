let express = require("express");
let router = express.Router();

let CommonVertical = require("./FromReturnData/Vertical");
let CommonSubTable = require("./FromReturnData/SubTable");
let CommonTable = require("./FromReturnData/Table");

router.use("/Vertical", CommonVertical)
router.use("/SubTable", CommonSubTable)
router.use("/Table", CommonTable)

module.exports = router;
