let express = require("express");
let router = express.Router();

let CommonToggles = require("./FromKeys/Toggles");

router.use("/Toggles", CommonToggles)

module.exports = router;
