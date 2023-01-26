let express = require("express");
let router = express.Router();

let CommonAsTree = require("./LedgerAutoJsonFile/AsTree");

router.use("AsTree", CommonAsTree)

module.exports = router;
