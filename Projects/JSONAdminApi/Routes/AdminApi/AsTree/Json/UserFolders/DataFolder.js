let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./DataFolder/Duplicate");
let CommonFileinFolder = require("./DataFolder/FileinFolder");
let CommonCreateNew = require("./DataFolder/CreateNew");


router.use("/Duplicate", CommonDuplicate)
router.use("/FileinFolder", CommonFileinFolder)
router.use("/CreateNew", CommonCreateNew)


module.exports = router;
