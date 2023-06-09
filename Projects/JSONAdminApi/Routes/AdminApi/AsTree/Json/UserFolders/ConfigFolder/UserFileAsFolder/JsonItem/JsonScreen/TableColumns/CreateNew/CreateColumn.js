var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/TableColumns/CreateNew/CreateColumn.Controllers");
let CommonMiddlewares = require("../../../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/TableColumns/CreateNew/CreateColumn");

router.post('/',CommonMiddlewares.PostFunc, CommonControllers.PostFunc);
router.delete('/',CommonMiddlewares.PostFunc, CommonControllers.DeleteFunc);
router.get('/',CommonMiddlewares.PostFunc, CommonControllers.GetFunc);

module.exports = router;