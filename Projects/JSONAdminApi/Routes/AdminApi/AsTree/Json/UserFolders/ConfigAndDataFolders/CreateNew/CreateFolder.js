var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder.Controllers");
let CommonMiddlewares = require("../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder");

router.post('/', CommonMiddlewares.PostFunc, CommonControllers.PostFunc);
router.delete('/', CommonMiddlewares.DeleteFunc, CommonControllers.DeleteFunc);
router.get('/', CommonMiddlewares.PostFunc, CommonControllers.GetFunc);

module.exports = router;