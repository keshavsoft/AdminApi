let express = require("express");
let router = express.Router();

let CommonCreateNew = require("./ConfigAndDataFolders/CreateNew");
let CommonUserFile = require("./ConfigAndDataFolders/UserFile");

router.use("/CreateNew", CommonCreateNew);
router.use("/UserFile", CommonUserFile);

module.exports = router;
