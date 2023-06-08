let express = require("express");
let router = express.Router();

let CommonDuplicate = require("./JsonScreen/Duplicate");
let CommonCreateNew = require("./JsonScreen/CreateNew");

router.use("/Duplicate", CommonDuplicate)
router.use("/CreateNew", CommonCreateNew)

module.exports = router;
