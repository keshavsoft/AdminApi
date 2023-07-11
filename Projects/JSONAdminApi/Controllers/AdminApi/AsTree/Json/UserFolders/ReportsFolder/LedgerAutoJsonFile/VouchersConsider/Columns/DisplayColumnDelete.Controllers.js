let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        inDataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportname = req.body.Reportname;
    let jVarLocalVoucherpk = req.body.Voucherpk;
    let jVarLocalColumnpk = req.body.Columnpk;
    let localUpdateBodyAsJson = req.body.BodyAsJson;


    let LocalFromRepo = await Repos.Delete({
        inDataPk: LocalDataPk,
        inReportname: jVarLocalReportname,
        inVoucherpk: jVarLocalVoucherpk,
        inColumnpk: jVarLocalColumnpk,
        inBodyAsJson: localUpdateBodyAsJson

    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

let PostFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportname = req.body.Reportname;
    let jVarLocalVoucherpk = req.body.Voucherpk;
    let jVarLocalColumnpk = req.body.Columnpk;
    let localUpdateBodyAsJson = req.body.BodyAsJson;


    let LocalFromRepo = await Repos.DeleteWithCheck({
        inDataPk: LocalDataPk,
        inReportname: jVarLocalReportname,
        inVoucherpk: jVarLocalVoucherpk,
        inColumnpk: jVarLocalColumnpk,
        inBodyAsJson: localUpdateBodyAsJson

    });


    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

module.exports = { GetFuncs, PatchFuncs, PostFuncs };