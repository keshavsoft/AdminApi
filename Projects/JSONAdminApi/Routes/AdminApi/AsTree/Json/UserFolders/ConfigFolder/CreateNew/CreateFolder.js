var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigFolder/CreateNew/CreateFolder.Controllers");
let CommonMiddlewares = require("../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ConfigFolder/CreateNew/CreateFolder");

router.post('/', CommonMiddlewares.PostFunc, CommonControllers.PostFunc);
router.delete('/', CommonMiddlewares.DeleteFunc, CommonControllers.DeleteFunc);
router.get('/', CommonControllers.GetFunc);

module.exports = router;