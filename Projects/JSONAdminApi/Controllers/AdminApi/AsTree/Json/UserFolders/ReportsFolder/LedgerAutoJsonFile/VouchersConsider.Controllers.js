let Repos = require("../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalCloneName = req.body.pk;

    let LocalFromRepo = await Repos.Clone({
        DataPK: LocalDataPk,
        ReportName: jVarLocalReportName,
        inVoucherConsiderpk: jVarLocalCloneName
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };