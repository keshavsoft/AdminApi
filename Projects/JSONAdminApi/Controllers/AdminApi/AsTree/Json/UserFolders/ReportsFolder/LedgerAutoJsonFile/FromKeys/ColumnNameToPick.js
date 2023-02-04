let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromKeys/ColumnNameToPick");

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


module.exports = { GetFuncs, PatchFuncs };