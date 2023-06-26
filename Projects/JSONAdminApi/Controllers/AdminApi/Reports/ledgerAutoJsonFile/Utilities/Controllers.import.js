let Repos = require("../../../../../Repository/AdminApi/Reports/LedgerAutoJsonFile/Utilities/import");

let PostFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let localToName = req.body.ToName;
    let localReportConfigObject = req.body.ReportConfigObject;

    let LocalFromRepo = await Repos.PostFunc({
        DataPK: LocalDataPk,
        ToName: localToName,
        ReportConfigObject: localReportConfigObject

    });
    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

module.exports = { PostFunc };