let express = require("express");
let router = express.Router();

let commonToSubTableCreate = require("./ToSubTable/ToSubTableCreate")

router.use("/ToSubTableCreate", commonToSubTableCreate);

module.exports = router;