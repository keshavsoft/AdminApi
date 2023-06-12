let express = require("express");
let router = express.Router();

let CommonDelete = require("./FromKeys/Delete");

router.use("/Delete", CommonDelete);

module.exports = router;
