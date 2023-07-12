var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete.Controllers");
let CommonMiddlewares = require("../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete");

router.get('/', CommonControllers.GetFuncs);
router.delete('/', CommonMiddlewares.DeleteFuncs, CommonControllers.DeleteFuncs);
router.post('/', CommonMiddlewares.PostFuncs, CommonControllers.PostFuncs);

module.exports = router;