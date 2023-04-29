let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./DataFolder/Duplicate");
let CommonFileinFolder = require("./DataFolder/FileinFolder");

router.use("/Duplicate", CommonDuplicate)
router.use("/FileinFolder", CommonFileinFolder)

module.exports = router;
