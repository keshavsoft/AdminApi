let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./ConfigFolder/Duplicate");
let CommonUserFileAsFolder = require("./ConfigFolder/UserFileAsFolder");
let CommonFromReturnData = require("./ConfigFolder/FromReturnData");
let CommonCreateNew = require("./ConfigFolder/CreateNew");

router.use("/Duplicate", CommonDuplicate)
router.use("/UserFileAsFolder", CommonUserFileAsFolder)
router.use("/FromReturnData", CommonFromReturnData)
router.use("/CreateNew", CommonCreateNew);

module.exports = router;
