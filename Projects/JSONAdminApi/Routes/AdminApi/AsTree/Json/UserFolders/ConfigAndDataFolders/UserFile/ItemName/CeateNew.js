let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./CeateNew/CreateItem");

router.use("/CreateItem", CommonCreateFile);

module.exports = router;
