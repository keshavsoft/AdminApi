let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/DuplicateScreen");

let GetFuncs = async (req, res) => {
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
    let jVarLocalScreenName = req.body.ScreenName;
    let jVarLocalDuplicateScreenName = req.body.DuplicateScreenName;

    let LocalFromRepo = await Repos.Clone({
        DataPK: LocalDataPk,
        FolderName: jVarLocalfolderName,
        FileName: jVarLocalFileName,
        ItemName: jVarLocalItemName,
        ScreenName: jVarLocalScreenName,
        DuplicateScreenName: jVarLocalDuplicateScreenName
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };