var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/ScreenName/TableColumns/CreateNew/CreateColumn.Controllers");
let CommonMiddlewares = require("../../../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/ScreenName/TableColumns/CreateNew/CreateColumn");

router.post('/',CommonMiddlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;