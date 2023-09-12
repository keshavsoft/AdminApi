let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./ItemName/CreateNew");
let CommonInsertNew = require("./ItemName/InsertNew");

router.use("/CreateNew", CommonCreateItem);
router.use("/InsertNew", CommonInsertNew);

module.exports = router;
