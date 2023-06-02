let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./ItemName/CeateNew");

router.use("/CeateNew", CommonCreateItem);

module.exports = router;
