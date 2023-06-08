let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./CreateNew/CreateItem");

router.use("/CreateItem", CommonCreateItem);

module.exports = router;
