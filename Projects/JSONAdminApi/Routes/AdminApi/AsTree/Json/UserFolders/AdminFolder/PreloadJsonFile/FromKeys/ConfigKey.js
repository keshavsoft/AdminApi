let express = require("express");
let router = express.Router();

let CommonItemConfigKey = require("./ConfigKey/ItemConfigKey");
let CommonJsonConfigKey = require("./ConfigKey/JsonConfigKey");

router.use("/ItemConfigKey", CommonItemConfigKey);
router.use("/JsonConfigKey", CommonJsonConfigKey);

module.exports = router;
