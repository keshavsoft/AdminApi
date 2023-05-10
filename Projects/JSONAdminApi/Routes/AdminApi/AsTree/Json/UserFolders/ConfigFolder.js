let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./ConfigFolder/Duplicate");
let CommonUserFileAsFolder = require("./ConfigFolder/UserFileAsFolder");
let CommonFromReturnData = require("./ConfigFolder/FromReturnData");

router.use("/Duplicate", CommonDuplicate)
router.use("/UserFileAsFolder", CommonUserFileAsFolder)
router.use("/FromReturnData", CommonFromReturnData)

module.exports = router;
