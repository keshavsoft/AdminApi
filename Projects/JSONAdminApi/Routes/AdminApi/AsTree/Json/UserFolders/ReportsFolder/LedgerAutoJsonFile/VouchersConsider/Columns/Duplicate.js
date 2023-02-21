var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/Duplicate");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonControllers.Clone);

module.exports = router;