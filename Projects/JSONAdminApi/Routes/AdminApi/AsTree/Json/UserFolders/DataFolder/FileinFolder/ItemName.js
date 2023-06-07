let express = require("express");
let router = express.Router();

let CommonCreateItem = require("./ItemName/CreateNew");

router.use("/CreateNew", CommonCreateItem);

module.exports = router;
