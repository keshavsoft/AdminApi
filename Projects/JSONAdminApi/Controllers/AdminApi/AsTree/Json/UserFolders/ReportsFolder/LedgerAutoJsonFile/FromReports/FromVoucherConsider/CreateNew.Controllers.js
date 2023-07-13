let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/CreateNew");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        inDataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let CreateNewFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportname = req.body.ReportName;
    let jVarLocalFolderName = req.body.FolderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;

    let LocalFromRepo = await Repos.CreateNewFunc({
        inDataPK: LocalDataPk,
        inReportName: jVarLocalReportname,
        inFolderName: jVarLocalFolderName,
        inFileName: jVarLocalFileName,
        inItemName: jVarLocalItemName
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, CreateNewFunc };