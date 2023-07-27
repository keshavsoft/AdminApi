let express = require("express");
let router = express.Router();

let CommonWidths = require("./SubKeys/Widths");

router.use("/Widths", CommonWidths)

module.exports = router;
