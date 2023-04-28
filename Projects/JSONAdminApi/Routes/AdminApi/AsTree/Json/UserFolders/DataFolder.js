let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./DataFolder/Duplicate");

router.use("/Duplicate", CommonDuplicate)

module.exports = router;
