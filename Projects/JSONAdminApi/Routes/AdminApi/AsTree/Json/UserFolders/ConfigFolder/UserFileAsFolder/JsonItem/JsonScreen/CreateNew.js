let express = require("express");
let router = express.Router();

let CommonCreateScreen = require("./CreateNew/CreateScreen");

router.use("/CreateScreen", CommonCreateScreen);

module.exports = router;
