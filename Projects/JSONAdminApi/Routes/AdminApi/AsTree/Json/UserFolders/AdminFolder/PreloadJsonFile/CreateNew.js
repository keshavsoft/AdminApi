let express = require("express");
let router = express.Router();

let CommonInsertKey = require("./CreateNew/InsertKey");

router.use("/InsertKey", CommonInsertKey);

module.exports = router;
