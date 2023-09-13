let express = require('express');
let router = express.Router();
let CommonControllers = require("../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/ItemName/ShowAll.Controllers");
let CommonMiddlewares = require("../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/DataFolder/FileInFolder/ItemName/ShowAll");

router.post('/', CommonMiddlewares.PostFunc, CommonControllers.PostFunc);

module.exports = router;