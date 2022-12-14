let express = require('express');
let router = express.Router();
let CommonController = require("../../../../../Controllers/AdminApi/Config/TableColumns/UpdateKeys/Toggles.Controllers");

router.patch('/', CommonController.patchFunc)

module.exports = router;