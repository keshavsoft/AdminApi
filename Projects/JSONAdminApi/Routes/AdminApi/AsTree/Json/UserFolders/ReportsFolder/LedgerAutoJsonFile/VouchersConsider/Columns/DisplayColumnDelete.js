var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete.Controllers");
let CommonMiddlewares = require("../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonMiddlewares.PatchFuncs, CommonControllers.PatchFuncs);
router.post('/', CommonMiddlewares.PostFuncs, CommonControllers.PostFuncs);

module.exports = router;