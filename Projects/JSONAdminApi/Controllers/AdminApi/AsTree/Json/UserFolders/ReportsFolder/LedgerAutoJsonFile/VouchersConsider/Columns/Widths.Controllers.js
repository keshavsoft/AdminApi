let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/Widths");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.reportname;
    let jVarLocalvoucherconsiderpk = req.body.voucherconsiderpk;
    let jVarLocalcolumnpk = req.body.columnpk;
    let localUpdateBodyAsJson = req.body.BodyAsJson;
    let localDataAttribute = req.body.DataAttribute;



    let LocalFromRepo = await Repos.Update({
        DataPK: LocalDataPk,
        ReportName: jVarLocalReportName,
        voucherconsiderpk: jVarLocalvoucherconsiderpk,
        columnpk: jVarLocalcolumnpk,
        BodyAsJson: localUpdateBodyAsJson,
        DataAttribute :localDataAttribute

    });
    res.json(LocalFromRepo);
    // if (LocalFromRepo.KTF) {
    //     res.sendStatus(200);
    // } else {
    //     res.sendStatus(204);
    // };
};


module.exports = { GetFuncs, PatchFuncs };