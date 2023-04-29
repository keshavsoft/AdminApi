var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/Duplicate/DuplicateFile.Controllers");
let CommonMiddleware = require("../../../../../../../../Middlewares/ForRoutes/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/Duplicate/DuplicateFile");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonMiddleware.patchFunc, CommonControllers.PatchFuncs);

module.exports = router;