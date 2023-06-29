var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/DisplayNameAlter.Controllers");
let CommonMiddlewares = require("../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/DisplayNameAlter")

router.get('/', CommonMiddlewares.GetFuncs, CommonControllers.GetFuncs);
router.patch('/', CommonMiddlewares.PatchFuncs, CommonControllers.PatchFuncs);

module.exports = router;