let express = require("express");
let router = express.Router();

let Controller = require("../../../../../Controllers/AdminApi/Reports/ledgerAutoJsonFile/Utilities/Controllers.import");

router.post('/', Controller.PostFunc);

module.exports = router;