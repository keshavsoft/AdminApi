let express = require("express");
let router = express.Router();

let CommonDisplayColumn = require("./Columns/DisplayColumn");
let CommonDuplicate = require("./Columns/Duplicate");

router.use("/DisplayColumn", CommonDisplayColumn);
router.use("/Duplicate", CommonDuplicate);


module.exports = router;
