let express = require("express");
let router = express.Router();

let CommonItemConfigKey = require("./ConfigKey/ItemConfigKey");

router.use("/ItemConfigKey", CommonItemConfigKey);

module.exports = router;
