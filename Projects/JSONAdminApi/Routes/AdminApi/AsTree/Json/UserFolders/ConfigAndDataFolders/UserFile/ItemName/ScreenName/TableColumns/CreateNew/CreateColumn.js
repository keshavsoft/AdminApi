var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/ScreenName/CreateNew/CreateScreen.Controllers");

router.post('/', CommonControllers.PostFunc);

module.exports = router;