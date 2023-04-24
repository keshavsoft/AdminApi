let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./UserFileAsFolder/Duplicate");

router.use("/Duplicate", CommonDuplicate)

module.exports = router;
