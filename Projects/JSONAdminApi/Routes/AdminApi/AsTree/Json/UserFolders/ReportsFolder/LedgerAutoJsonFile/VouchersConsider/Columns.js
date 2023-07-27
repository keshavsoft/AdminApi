let express = require("express");
let router = express.Router();

let CommonDisplayColumn = require("./Columns/DisplayColumn");
let CommonDuplicate = require("./Columns/Duplicate");
let CommonDisplayToggles = require("./Columns/DisplayToggles");
let CommonDefaultValue = require("./Columns/DefaultValue");
let CommonDisplayColumnDelete = require("./Columns/DisplayColumnDelete");

router.use("/DisplayColumn", CommonDisplayColumn);
router.use("/Duplicate", CommonDuplicate);
router.use("/DisplayToggles", CommonDisplayToggles);
router.use("/DefaultValue", CommonDefaultValue);
router.use("/DisplayColumnDelete", CommonDisplayColumnDelete);


module.exports = router;
