var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ClientEval.Controllers");
let Middlewares = require("../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ClientEval")

router.get('/', CommonControllers.GetFuncs);
router.patch('/', Middlewares.PatchFuncs, CommonControllers.Update);

module.exports = router;
