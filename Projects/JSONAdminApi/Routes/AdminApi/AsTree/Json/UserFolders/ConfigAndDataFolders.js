let express = require("express");
let router = express.Router();

let CommonCreateNew = require("./ConfigAndDataFolders/CreateNew");
let CommonCreateFile = require("./ConfigAndDataFolders/UserFile");

router.use("/CreateNew", CommonCreateNew);
router.use("/UserFile", CommonCreateFile)

module.exports = router;
