let express = require("express");
let router = express.Router();

let CommonDisplayColumn = require("./Columns/DisplayColumn");
let CommonJoinTable = require("./Columns/JoinTable");
let CommonTransformType = require("./Columns/TransformType");


router.use("/DisplayColumn", CommonDisplayColumn)
router.use("/JoinTable", CommonJoinTable)
router.use("/TransformType", CommonTransformType)

module.exports = router;
