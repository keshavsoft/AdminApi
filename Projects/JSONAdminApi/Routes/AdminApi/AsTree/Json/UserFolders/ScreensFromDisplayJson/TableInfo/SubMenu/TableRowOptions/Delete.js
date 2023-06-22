var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/TableRowOptions/Delete.Controllers");
let CommonMiddlewares = require("../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/TableRowOptions/Delete");

router.get('/',CommonMiddlewares.GetFuncs, CommonControllers.GetFuncs);
router.patch('/',CommonMiddlewares.PatchFuncs, CommonControllers.PatchFuncs);



module.exports = router;