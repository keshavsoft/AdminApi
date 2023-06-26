let express = require("express");
let router = express.Router();

let CommonInsertKey = require("./FromKeys/InsertKey");

router.use("/InsertKey", CommonInsertKey)

module.exports = router;
