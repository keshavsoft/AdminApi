var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/ConfigKey/JsonConfigKey");
let CommonMiddleWares = require("../../../../../../../../../MiddleWares/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/ConfigKey/JsonConfigKey");

router.post('/',CommonMiddleWares.PostFunc, CommonControllers.PostFunc);
router.delete('/', CommonMiddleWares.DeleteFunc, CommonControllers.DeleteFunc);
router.get('/', CommonControllers.GetFunc);

module.exports = router;