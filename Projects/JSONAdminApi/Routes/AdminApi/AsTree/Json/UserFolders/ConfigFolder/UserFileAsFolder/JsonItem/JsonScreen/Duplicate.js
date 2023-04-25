let express = require("express");
let router = express.Router();

let CommonDuplicateScreen = require("./Duplicate/DuplicateScreen");

router.use("/DuplicateScreen", CommonDuplicateScreen)

module.exports = router;
