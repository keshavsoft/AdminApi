let express = require("express");
let router = express.Router();

let CommonCreateFile = require("./CreateNew/CreateFile");

router.use("/CreateFile", CommonCreateFile);

module.exports = router;
