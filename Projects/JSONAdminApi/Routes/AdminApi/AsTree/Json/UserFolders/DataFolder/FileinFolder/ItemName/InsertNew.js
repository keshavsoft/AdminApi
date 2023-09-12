let express = require("express");
let router = express.Router();

let CommonInsertNew = require("./InsertNew/InsertNew");

router.use("/InsertNew", CommonInsertNew);

module.exports = router;
