let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./LedgerAutoJsonFile/FromKeys");
let CommonAsTable = require("./LedgerAutoJsonFile/AsTable");

router.use("/FromKeys", CommonFromKeys)
router.use("/AsTable", CommonAsTable)

module.exports = router;
