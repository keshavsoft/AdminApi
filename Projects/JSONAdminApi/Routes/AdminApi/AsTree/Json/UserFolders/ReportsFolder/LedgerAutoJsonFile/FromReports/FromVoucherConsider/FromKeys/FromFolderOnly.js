var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly.Controllers");
let CommonMiddleware = require("../../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly");

router.get('/', CommonControllers.GetFuncs);
router.patch('/',CommonMiddleware.PatchFuncs, CommonControllers.PatchFuncs);
router.post('/',CommonMiddleware.PostFuncs, CommonControllers.PostFuncs);

module.exports = router;