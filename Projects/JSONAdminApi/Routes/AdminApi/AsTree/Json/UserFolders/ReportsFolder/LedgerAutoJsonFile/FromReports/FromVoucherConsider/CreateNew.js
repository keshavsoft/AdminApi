var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/CreateNew.Controllers");

router.get('/', CommonControllers.GetFuncs);
router.post('/', CommonControllers.CreateNewFunc);

module.exports = router;