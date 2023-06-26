let Repos = require("../../../../../Repository/AdminApi/Reports/LedgerAutoJsonFile/Utilities/import");

let PostFunc = (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    if ("ToName" in req.body) {
        let localToName = req.body.ToName;

        if ("ReportConfigObject" in req.body) {
            let localReportConfigObject = req.body.ReportConfigObject;

            Repos.PostFunc({
                DataPK: LocalDataPk,
                ToName: localToName,
                ReportConfigObject: localReportConfigObject

            });

        } else {
            res.json({ KTF: false, KReason: "ReportConfigObject not found in body" })
        };
    } else {
        res.json({ KTF: false, KReason: "ToName not found in body" })
    };



};

module.exports = { PostFunc };