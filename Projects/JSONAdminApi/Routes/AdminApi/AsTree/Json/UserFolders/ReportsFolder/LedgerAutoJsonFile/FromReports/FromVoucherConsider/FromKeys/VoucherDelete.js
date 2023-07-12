var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/VoucherDelete.Controllers");
let CommonMiddlewares = require("../../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/VoucherDelete")

router.get('/', CommonControllers.GetFuncs);
router.delete('/',CommonMiddlewares.DeleteFuncs, CommonControllers.DeleteFuncs);
router.post('/',CommonMiddlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;