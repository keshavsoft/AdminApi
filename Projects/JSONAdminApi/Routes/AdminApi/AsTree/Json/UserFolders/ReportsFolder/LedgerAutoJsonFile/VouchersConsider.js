let express = require("express");
let router = express.Router();

let CommonColumns = require("./VouchersConsider/Columns");

router.use("/Columns", CommonColumns);


module.exports = router;
