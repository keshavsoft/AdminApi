let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/Duplicate");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let Clone = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalVoucherConsiderPK = req.body.VoucherConsiderPK;
    let jVarLocalColumnPk = req.body.ColumnPk;

    let LocalFromRepo = await Repos.Clone({
        DataPK: LocalDataPk,
        ReportName: jVarLocalReportName,
        VoucherConsiderPK: jVarLocalVoucherConsiderPK,
        ColumnPk: jVarLocalColumnPk
    });
    res.json(LocalFromRepo);
    // if (LocalFromRepo.KTF) {
    //     res.sendStatus(200);
    // } else {
    //     res.sendStatus(204);
    // };
};


module.exports = { GetFuncs, Clone };