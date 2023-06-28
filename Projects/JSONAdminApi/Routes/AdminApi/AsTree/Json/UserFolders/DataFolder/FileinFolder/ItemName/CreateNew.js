let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./CreateNew/CreateItem");
let CommonCreateItemWithData = require("./CreateNew/CreateItemWithData");

router.use("/CreateItem", CommonCreateItem);
router.use("/CreateItemWithData", CommonCreateItemWithData);

module.exports = router;
