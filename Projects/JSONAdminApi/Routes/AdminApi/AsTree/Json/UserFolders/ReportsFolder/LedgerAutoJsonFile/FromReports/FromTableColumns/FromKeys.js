let express = require("express");
let router = express.Router();

let CommonToggles = require("./FromKeys/Toggles");
let CommonColumnNameToPick = require("./FromKeys/ColumnNameToPick");
let CommonConfiguration = require("./FromKeys/Configuration");
let CommonFromFolder = require("./FromKeys/FromFolder");
let CommonItemNameConsider= require("./FromKeys/ItemNameConsider");


router.use("/Toggles", CommonToggles)
router.use("/ColumnNameToPick", CommonColumnNameToPick)
router.use("/Configuration", CommonConfiguration)
router.use("/FromFolder", CommonFromFolder)
router.use("/ItemNameConsider", CommonItemNameConsider)

module.exports = router;
