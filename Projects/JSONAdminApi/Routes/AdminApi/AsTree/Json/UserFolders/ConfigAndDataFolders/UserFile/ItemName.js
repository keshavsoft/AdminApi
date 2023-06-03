let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./ItemName/CreateNew");
let CommonScreenName = require("./ItemName/ScreenName");

router.use("/CreateNew", CommonCreateItem);
router.use("/ScreenName", CommonScreenName);

module.exports = router;
