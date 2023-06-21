let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableInfo/SubMenu/TableRowOptions/Edit");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalFolderName = req.body.FolderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalScreenName = req.body.ScreenName;
    let jVarLocalGridName = req.body.GridName;
    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        inDataPK: LocalDataPk,
        inFolderName: jVarLocalFolderName,
        inFileName: jVarLocalFileName,
        inItemName: jVarLocalItemName,
        inScreenName: jVarLocalScreenName,
        inGridName: jVarLocalGridName,
        inBodyAsJson: localUpdateBodyAsJson
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };