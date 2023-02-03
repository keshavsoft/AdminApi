let express = require("express");
let router = express.Router();

let CommonToggles = require("./FromKeys/Toggles");
let CommonColumnNameToPick = require("./FromKeys/ColumnNameToPick");

router.use("/Toggles", CommonToggles)
router.use("/ColumnNameToPick", CommonColumnNameToPick)

module.exports = router;
