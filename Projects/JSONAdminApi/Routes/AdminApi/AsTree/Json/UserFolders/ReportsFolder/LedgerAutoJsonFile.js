let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./LedgerAutoJsonFile/FromKeys");

router.use("/FromKeys", CommonFromKeys)

module.exports = router;
