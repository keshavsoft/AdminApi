let express = require("express");
let Router = express.Router();

let Controllers = require("../../../Controllers/AdminApi/FromData/GetFoldersAsArray");

Router.get("/", Controllers.GetFunc);

module.exports = Router;