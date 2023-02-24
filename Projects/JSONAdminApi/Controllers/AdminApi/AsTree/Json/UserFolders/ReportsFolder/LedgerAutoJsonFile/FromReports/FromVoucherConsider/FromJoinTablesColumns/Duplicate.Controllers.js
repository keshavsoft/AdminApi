let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromJoinTablesColumns/Duplicate");

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
    let jVarLocalinVoucherConsiderpk = req.body.inVoucherConsiderpk;
    let jVarLocaljVarLocalVouchersConsiderPK = req.body.JoinTablesColumnsPK;


    let LocalFromRepo = await Repos.Duplicate({
        inDataPK: LocalDataPk,
        inReportName:jVarLocalinReportName,
        inVouchersConsiderPK:jVarLocalinVouchersConsiderPK,
        inVoucherConsiderpk:jVarLocalinVoucherConsiderpk,
        JoinTablesColumnsPK: jVarLocaljVarLocalVouchersConsiderPK,
        
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };