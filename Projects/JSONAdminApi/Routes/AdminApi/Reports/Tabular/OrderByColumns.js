let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/Tabular/OrderByColumns");

router.get('/AsTree', function (req, res, next) {
    let LocalReportItemName = req.params.ReportItemName;
    let LocalUserName = req.KeshavSoft.kUserName;

    Repos.AsTree({
        inReportName: LocalReportItemName, inUserName: LocalUserName
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});


router.get('/Toggles', function (req, res, next) {
    let LocalReportItemName = req.params.ReportItemName;
    let LocalUserName = req.KeshavSoft.kUserName;

    Repos.Toggles({
        inReportName: LocalReportItemName, inUserName: LocalUserName
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});


module.exports = router;