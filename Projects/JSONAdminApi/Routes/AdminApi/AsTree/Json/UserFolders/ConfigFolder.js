let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./ConfigFolder/Duplicate");
let CommonUserFileAsFolder = require("./ConfigFolder/UserFileAsFolder");

router.use("/Duplicate", CommonDuplicate)
router.use("/UserFileAsFolder", CommonUserFileAsFolder)

module.exports = router;
