var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CeateNew/CreateItem.Controllers");

router.post('/', CommonControllers.PostFunc);

module.exports = router;