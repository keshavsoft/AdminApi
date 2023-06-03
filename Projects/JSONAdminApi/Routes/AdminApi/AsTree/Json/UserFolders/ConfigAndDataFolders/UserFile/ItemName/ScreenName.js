let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./CreateNew/CreateItem");
let CommonCreateNew = require("./ScreenName/CreateNew");

router.use("/CreateItem", CommonCreateItem);
router.use("/CreateNew", CommonCreateNew);

module.exports = router;
