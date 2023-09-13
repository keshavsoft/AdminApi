let express = require("express");
let router = express.Router();

let CommonCreateScreen = require("./CreateNew/CreateScreen");
let CommonInsertNew = require("./CreateNew/InsertNew");

router.use("/CreateScreen", CommonCreateScreen);
router.use("/InsertNew", CommonInsertNew);

module.exports = router;
