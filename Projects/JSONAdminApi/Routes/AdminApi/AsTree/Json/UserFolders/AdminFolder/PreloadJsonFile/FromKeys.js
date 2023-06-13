let express = require("express");
let router = express.Router();

let CommonDelete = require("./FromKeys/Delete");
let CommonDuplicate = require("./FromKeys/Duplicate");
let CommonConfigKey = require("./FromKeys/ConfigKey");

router.use("/Delete", CommonDelete);
router.use("/Duplicate", CommonDuplicate);
router.use("/ConfigKey", CommonConfigKey);

module.exports = router;
