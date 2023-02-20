let express = require("express");
let router = express.Router();

let CommonFromKeys = require("./FromVoucherConsider/FromKeys");
let CommonDuplicate = require("./FromVoucherConsider/Duplicate");

router.use("/FromKeys", CommonFromKeys)
router.use("/Duplicate", CommonDuplicate)


module.exports = router;
