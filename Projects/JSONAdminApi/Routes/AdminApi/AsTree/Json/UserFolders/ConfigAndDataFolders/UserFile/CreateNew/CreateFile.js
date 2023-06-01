var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/CreateNew/CreateFile.Controllers");


router.post('/', CommonControllers.PostFunc);
module.exports = router;