let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Duplicate/DuplicateItem");

let GetFuncs = async (req, res) => {
    console.log("CommonDuplicate");
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};


let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalfolderName = req.body.folderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalInToItemName = req.body.inToItemName;

    let LocalFromRepo = await Repos.Clone({
        inDataPK: LocalDataPk,
        inFolderName: jVarLocalfolderName,
        inFileNameOnly: jVarLocalFileName,
        inItemName: jVarLocalItemName,
        inToItemName: jVarLocalInToItemName
    });
    console.log("LocalFromRepo",LocalFromRepo);

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };