let express = require("express");
let router = express.Router();

let CommonDuplicateFolder = require("./Duplicate/DuplicateFolder");

router.use("/DuplicateFolder", CommonDuplicateFolder)

module.exports = router;
