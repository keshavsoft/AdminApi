var express = require('express');
var router = express.Router();
//let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CreateNew/CreateItem.Controllers");

router.post('/', (req,res) => {
    res.end("testing")
});

module.exports = router;