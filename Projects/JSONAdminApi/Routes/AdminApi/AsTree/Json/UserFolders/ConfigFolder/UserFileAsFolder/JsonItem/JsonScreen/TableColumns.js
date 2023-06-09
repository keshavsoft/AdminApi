let express = require("express");
let router = express.Router();

let CommonCreateNew = require("./TableColumns/CreateNew.Js");

router.use("/CreateNew", CommonCreateNew)

module.exports = router;
