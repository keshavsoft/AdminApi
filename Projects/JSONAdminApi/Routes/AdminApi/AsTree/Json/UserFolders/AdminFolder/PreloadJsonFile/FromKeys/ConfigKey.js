let express = require("express");
let router = express.Router();

let CommonItemConfigKey = require("./ConfigKey/ItemConfigKey");
let CommonJsonConfigKey = require("./ConfigKey/JsonConfigKey");
let CommonColumnsKey = require("./ConfigKey/ColumnsKey");

router.use("/ItemConfigKey", CommonItemConfigKey);
router.use("/JsonConfigKey", CommonJsonConfigKey);
router.use("/ColumnsKey", CommonColumnsKey);

module.exports = router;
