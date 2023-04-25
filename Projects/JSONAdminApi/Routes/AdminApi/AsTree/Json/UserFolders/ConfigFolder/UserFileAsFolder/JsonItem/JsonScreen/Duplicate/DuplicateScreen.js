var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/Duplicate/DuplicateScreen.Controllers");
let CommonMiddleware = require("../../../../../../../../../../Middlewares/ForRoutes/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/Duplicate/DuplicateScreen");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonMiddleware.patchFunc, CommonControllers.PatchFuncs);

module.exports = router;