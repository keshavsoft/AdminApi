let express = require("express");
let router = express.Router();

let CommonCreateNew = require("./PreloadJsonFile/CreateNew");
let CommonFromKeys = require("./PreloadJsonFile/FromKeys");

router.use("/CreateNew", CommonCreateNew);
router.use("/FromKeys", CommonFromKeys);

module.exports = router;
