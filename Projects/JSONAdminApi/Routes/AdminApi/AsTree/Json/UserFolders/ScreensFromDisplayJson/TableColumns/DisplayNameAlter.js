var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/DisplayNameAlter.Controllers");
let CommonMiddleWares = require("../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/DisplayNameAlter")

router.get('/', CommonMiddleWares.GetFuncs, CommonControllers.GetFuncs);
router.patch('/', CommonMiddleWares.PatchFuncs, CommonControllers.PatchFuncs);

module.exports = router;