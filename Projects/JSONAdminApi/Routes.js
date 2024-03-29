var express = require('express');
var router = express.Router();
// let CommonMiddlewareJwtVerify = require("../../common/Jwt/Bs5");
let CommonAdminApi = require("./Routes/AdminApi");
let CommonValidate = require('./Routes/Validate');

let CommonMiddlewareJwtVerify = require("../../common/Jwt/ForLogin/UserCredentials");

router.use('/AdminApi', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, CommonAdminApi);
router.use('/Validate', CommonValidate);

module.exports = router;