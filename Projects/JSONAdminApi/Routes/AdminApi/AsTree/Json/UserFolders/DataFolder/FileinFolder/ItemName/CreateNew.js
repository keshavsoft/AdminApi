let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./CreateNew/CreateItem");
let CommonCreateItemAndData = require("./CreateNew/CreateItemAndData");

router.use("/CreateItem", CommonCreateItem);
router.use("/CreateItemAndData", CommonCreateItemAndData);

module.exports = router;
