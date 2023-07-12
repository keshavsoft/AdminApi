let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete");

let GetFuncs = async (req, res) => {

    let LocalDataPK = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        inDataPK: LocalDataPK
    });
    res.json(LocalFromRepo)
};

let DeleteFuncs = async (req, res) => {
    let LocalDataPK = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalVoucherpk = req.body.Voucherpk;
    let jVarLocalColumnpk = req.body.Columnpk;

    let LocalFromRepo = await Repos.Delete({
        inDataPK: LocalDataPK,
        inReportName: jVarLocalReportName,
        inVoucherpk: jVarLocalVoucherpk,
        inColumnpk: jVarLocalColumnpk,
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

let PostFuncs = async (req, res) => {
    let LocalDataPK = req.KeshavSoft.DataPK;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalVoucherpk = req.body.Voucherpk;
    let jVarLocalColumnpk = req.body.Columnpk;


    let LocalFromRepo = await Repos.DeleteWithCheck({
        inDataPK: LocalDataPK,
        inReportName: jVarLocalReportName,
        inVoucherpk: jVarLocalVoucherpk,
        inColumnpk: jVarLocalColumnpk,

    });


    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

module.exports = { GetFuncs, DeleteFuncs, PostFuncs };