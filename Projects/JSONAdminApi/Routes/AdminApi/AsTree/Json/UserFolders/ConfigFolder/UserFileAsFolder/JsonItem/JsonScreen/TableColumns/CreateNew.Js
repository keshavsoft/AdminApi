let express = require("express");
let router = express.Router();

let CommonCreateColumn = require("./CreateNew/CreateColumn");

router.use("/CreateColumn", CommonCreateColumn);

module.exports = router;
