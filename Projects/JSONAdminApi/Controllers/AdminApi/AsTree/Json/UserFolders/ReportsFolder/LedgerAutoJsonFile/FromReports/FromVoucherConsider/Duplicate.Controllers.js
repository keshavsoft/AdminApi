let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/Duplicate");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportname = req.body.ReportName;
    let jVarLocalVouchersConsiderPK = req.body.VouchersConsiderPK;


    let LocalFromRepo = await Repos.Duplicate({
        inDataPK: LocalDataPk,
        ReportName: jVarLocalReportname,
        inVoucherConsiderpk: jVarLocalVouchersConsiderPK
    });
    res.json(LocalFromRepo);
    // if (LocalFromRepo.KTF) {
    //     res.sendStatus(200);
    // } else {
    //     res.sendStatus(204);
    // };
};


module.exports = { GetFuncs, PatchFuncs };