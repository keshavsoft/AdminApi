let express = require("express");
let router = express.Router();

let CommonDuplicateFile = require("./Duplicate/DuplicateFile");

router.use("/DuplicateFile", CommonDuplicateFile)

module.exports = router;
