var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/CreateNew/CreateFile.Controllers");
let CommonMiddlewares = require("../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/CreateNew/CreateFile");

router.post('/', CommonMiddlewares.PostFunc, CommonControllers.PostFunc);
router.delete('/', CommonMiddlewares.PostFunc, CommonControllers.DeleteFunc);

module.exports = router;