let express = require("express");
let router = express.Router();

let CommonCreateNew = require("./UserFile/CreateNew");

router.use("/CreateNew", CommonCreateNew);

module.exports = router;
