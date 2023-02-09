let express = require("express");
let router = express.Router();

let CommonToggles = require("./FromKeys/Toggles");
let CommonColumnNameToPick = require("./FromKeys/ColumnNameToPick");
let CommonConfiguration = require("./FromKeys/Configuration");


router.use("/Toggles", CommonToggles)
router.use("/ColumnNameToPick", CommonColumnNameToPick)
router.use("/Configuration", CommonConfiguration)

module.exports = router;
