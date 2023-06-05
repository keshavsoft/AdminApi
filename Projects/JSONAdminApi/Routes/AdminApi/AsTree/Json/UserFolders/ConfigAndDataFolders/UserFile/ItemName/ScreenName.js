let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./CreateNew/CreateItem");
let CommonCreateNew = require("./ScreenName/CreateNew");
let CommonTableColumns = require("./ScreenName/TableColumns");

router.use("/CreateItem", CommonCreateItem);
router.use("/CreateNew", CommonCreateNew);
router.use("/TableColumns", CommonTableColumns);

module.exports = router;
