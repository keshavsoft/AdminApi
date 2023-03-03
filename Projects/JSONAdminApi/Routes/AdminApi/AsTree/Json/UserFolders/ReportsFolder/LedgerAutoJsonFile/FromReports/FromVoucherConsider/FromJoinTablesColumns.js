let express = require("express");
let router = express.Router();

let CommonDisplayColumn = require("./FromJoinTablesColumns/DisplayColumn");
let CommonDuplicate = require("./FromJoinTablesColumns/Duplicate");
let CommonJointConditions = require("./FromJoinTablesColumns/JointConditions");



router.use("/DisplayColumn", CommonDisplayColumn)
router.use("/Duplicate", CommonDuplicate)
router.use("/JointConditions", CommonJointConditions)


module.exports = router;
