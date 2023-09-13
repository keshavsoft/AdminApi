var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/CreateNew/InsertNew.Controllers");
let CommonMiddlewares = require("../../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/CreateNew/InsertNew");

router.get('/', CommonControllers.GetFunc);
router.post('/', CommonMiddlewares.PostFunc, CommonControllers.PostFunc);
router.delete('/', CommonMiddlewares.DeleteFunc, CommonControllers.DeleteFunc);

module.exports = router;