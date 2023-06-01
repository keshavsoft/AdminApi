var express = require('express');
var router = express.Router();
//let CommonControllers = require("../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder.Controllers");

router.post('/',(req,res) => {
    res.end("test")
});

module.exports = router;