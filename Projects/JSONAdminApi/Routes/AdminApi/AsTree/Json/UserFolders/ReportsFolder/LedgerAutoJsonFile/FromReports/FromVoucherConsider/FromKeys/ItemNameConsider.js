var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider.Controllers");
let CommonMiddlewares = require("../../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider")
router.get('/', CommonControllers.GetFuncs);
router.patch('/',CommonMiddlewares.PatchFuncs, CommonControllers.PatchFuncs);
router.post('/',CommonMiddlewares.PostFuncs, CommonControllers.PostFuncs);

module.exports = router;