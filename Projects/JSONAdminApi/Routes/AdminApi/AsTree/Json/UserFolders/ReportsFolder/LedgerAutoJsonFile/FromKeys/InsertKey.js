var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromKeys/InsertKey.Controllers");

router.get('/', CommonControllers.GetFuncs);
router.post('/', CommonControllers.postFuncs);

module.exports = router;