var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/Duplicate/DuplicateFolder.Controllers");
let CommonMiddleware = require("../../../../../../Middlewares/ForRoutes/AdminApi/AsTree/Json/UserFolders/Duplicate/DuplicateFolder");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonMiddleware.patchFunc, CommonControllers.PatchFuncs);

module.exports = router;