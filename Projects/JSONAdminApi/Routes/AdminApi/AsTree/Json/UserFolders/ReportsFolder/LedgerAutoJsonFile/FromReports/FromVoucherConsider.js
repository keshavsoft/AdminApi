let express = require("express");
let router = express.Router();

let CommonFromVoucherConsider = require("./FromVoucherConsider/FromKeys");
;

router.use("/FromReports", CommonFromVoucherConsider)


module.exports = router;
