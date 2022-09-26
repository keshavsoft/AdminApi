let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/Screens/Insert");

router.get('/', function (req, res, next) {
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    //let LocalUserName = req.KeshavSoft.kUserName;
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.Insert({
        inJsonConfig: req.KeshavSoft.JsonConfig,
        inItemName: LocalItemConfig.inItemName,
        inToName: req.KeshavSoft.UtilityConfig.ToName,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;