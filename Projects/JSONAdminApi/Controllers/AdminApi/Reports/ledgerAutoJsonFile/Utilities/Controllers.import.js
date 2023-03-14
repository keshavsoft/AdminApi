let Repos = require("../../../../../Repository/AdminApi/Reports/LedgerAutoJsonFile/Utilities/import");

let PostFunc = (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    if ("ToName" in req.body) {
        let localToName = req.body.ToName;

        if ("ReportConficObject" in req.body) {
            let localReportConficObject = req.body.ReportConficObject;

            Repos.PostFunc({
                DataPK: LocalDataPk,
                ToName: localToName,
                ReportConficObject: localReportConficObject

            });

        } else {
            res.json({ KTF: false, KReason: "ReportConficObject not found in body" })
        };
    } else {
        res.json({ KTF: false, KReason: "ToName not found in body" })
    };



};

module.exports = { PostFunc };