let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PostFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalItemName = req.body.ReportName;
    let jVarLocalVoucher = req.body.VoucherPk;

    let localUpdateBodyAsJsonFolderName = req.body.BodyAsJson.FolderName;
    let localUpdateBodyAsJsonFromFolder = req.body.BodyAsJson.FromFolder;

    let LocalFromRepo = await Repos.PostFuncs({
        inDataPK: LocalDataPk,
        inReportName: jVarLocalItemName,
        inVoucherPk: jVarLocalVoucher,
        inFolderName: localUpdateBodyAsJsonFolderName,
        inFromFolder: localUpdateBodyAsJsonFromFolder
    });

    res.end(JSON.stringify(LocalFromRepo));

};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalVoucher = req.body.voucher;

    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        DataPK: LocalDataPk,
        ItemName: jVarLocalItemName,
        voucher: jVarLocalVoucher,
        BodyAsJson: localUpdateBodyAsJson
    });
    res.end(JSON.stringify(LocalFromRepo));


    // if (LocalFromRepo.KTF) {
    //     res.sendStatus(200);
    // } else {
    //     res.sendStatus(204);
    // };
};


module.exports = { GetFuncs, PatchFuncs, PostFuncs };