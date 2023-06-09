let express = require("express");
let router = express.Router();

let CommonPreloadJsonFile = require("./AdminFolder/PreloadJsonFile");

router.use("/PreloadJsonFile", CommonPreloadJsonFile);

module.exports = router;
