let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/VoucherDelete");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        inDataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let DeleteFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalVoucherPk = req.body.VoucherPk;

    let LocalFromRepo = await Repos.Delete({
        inDataPK: LocalDataPk,
        inReportName: jVarLocalReportName,
        inVoucherPk: jVarLocalVoucherPk,
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

let PostFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalVoucherPk = req.body.VoucherPk;

    let LocalFromRepo = await Repos.PostFunc({
        inDataPK: LocalDataPk,
        inReportName: jVarLocalReportName,
        inVoucherPk: jVarLocalVoucherPk,
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, DeleteFuncs, PostFunc };