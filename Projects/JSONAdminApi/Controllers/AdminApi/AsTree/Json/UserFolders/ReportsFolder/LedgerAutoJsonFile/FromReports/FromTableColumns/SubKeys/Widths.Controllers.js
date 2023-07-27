let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromTableColumns/SubKeys/Widths");

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
    let jVarLocalDataAttribute = req.body.DataAttribute;

    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        inDataPK: LocalDataPk,
        inReportName: jVarLocalReportName,
        inDataAttribute: jVarLocalDataAttribute,
        BodyAsJson: localUpdateBodyAsJson
    });
    res.end(JSON.stringify(LocalFromRepo));

};


module.exports = { GetFuncs, PatchFuncs };