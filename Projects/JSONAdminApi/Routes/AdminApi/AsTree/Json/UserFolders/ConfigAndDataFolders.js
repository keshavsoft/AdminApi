let express = require("express");
let router = express.Router();

let CommonCreateNew = require("./ConfigAndDataFolders/CreateNew");
let CommonCreateNew = require("./ConfigAndDataFolders/UserFile");

router.use("/CreateNew", CommonCreateNew)

module.exports = router;
