let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalvoucher = req.body.voucher;

    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        DataPK: LocalDataPk,
        ItemName: jVarLocalItemName,
        voucher: jVarLocalvoucher,
        BodyAsJson: localUpdateBodyAsJson
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

let PostFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalvoucher = req.body.voucher;

    let localFolderName = req.body.BodyAsJson.FolderName;
    let localFileName = req.body.BodyAsJson.FileName;
    let localItemName = req.body.BodyAsJson.ItemName;
    let localItemNameConsider = req.body.BodyAsJson.ItemNameConsider;

    let LocalFromRepo = await Repos.PostFuncs({
        inDataPK: LocalDataPk,
        inVoucherPk: jVarLocalItemName,
        invoucher: jVarLocalvoucher,
        inFolderName: localFolderName,
        inFileName: localFileName,
        inItemName : localItemName,
        inItemNameConsider :localItemNameConsider

    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs, PostFuncs };