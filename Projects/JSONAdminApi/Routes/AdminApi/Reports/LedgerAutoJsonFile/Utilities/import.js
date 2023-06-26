let express = require("express");
let router = express.Router();

let CommonController = require("../../../../../Controllers/AdminApi/Reports/ledgerAutoJsonFile/Utilities/Controllers.import");
let CommonMiddlewares = require("../../../../../Middlewares/AdminApi/Reports/ledgerAutoJsonFile/Utilities/import");

router.post('/',CommonMiddlewares.PostFunc, CommonController.PostFunc);

module.exports = router;