let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./ItemName/CreateNew");
let CommonInsertNew = require("./ItemName/InsertNew");
let CommonShowAll = require("./ItemName/ShowAll");

router.use("/CreateNew", CommonCreateItem);
router.use("/InsertNew", CommonInsertNew);
router.use("/ShowAll", CommonShowAll);

module.exports = router;
