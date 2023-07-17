let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ColumnNameToPick");

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
        res.json(LocalFromRepo)
    };
};
let PostFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalvoucher = req.body.voucher;

    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.PostFunc({
        DataPK: LocalDataPk,
        ItemName: jVarLocalItemName,
        voucher: jVarLocalvoucher,
        BodyAsJson: localUpdateBodyAsJson
    });

    if (LocalFromRepo.KTF) {
        res.json(LocalFromRepo)
    };
};


module.exports = { GetFuncs, PatchFuncs, PostFunc };