let express = require("express");
let router = express.Router();

let CommonDelete = require("./FromKeys/Delete");
let CommonDuplicate = require("./FromKeys/Duplicate");

router.use("/Delete", CommonDelete);
router.use("/Duplicate", CommonDuplicate);

module.exports = router;
