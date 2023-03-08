let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromJoinTables/JsonConfig");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalinReportName = req.body.inReportName;
    let jVarLocalinVouchersConsiderPK = req.body.inVouchersConsiderPK;
    let jVarLocalJoinTablesColumnsPK = req.body.JoinTablesColumnsPK;
    let jVarLocalBodyAsJson = req.body.BodyAsJson;


    let LocalFromRepo = await Repos.Update({
        inDataPK: LocalDataPk,
        inReportName: jVarLocalinReportName,
        inVouchersConsiderPK: jVarLocalinVouchersConsiderPK,
        JoinTablesColumnsPK:jVarLocalJoinTablesColumnsPK,
        BodyAsJson: jVarLocalBodyAsJson
    });


    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };