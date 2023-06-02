let express = require("express");
let router = express.Router();

let CommonCreateNew = require("./UserFile/CreateNew");
let CommonItemName = require("./UserFile/ItemName");

router.use("/CreateNew", CommonCreateNew);
router.use("/ItemName", CommonItemName);

module.exports = router;
