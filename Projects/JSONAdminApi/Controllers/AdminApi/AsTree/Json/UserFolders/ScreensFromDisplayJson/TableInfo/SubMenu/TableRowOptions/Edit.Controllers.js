let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/TableRowOptions/Edit");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        inDataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalfolderName = req.body.FolderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalScreenName = req.body.ScreenName;
    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        inDataPK: LocalDataPk,
        inFolderName: jVarLocalfolderName,
        inFileName: jVarLocalFileName,
        inItemName: jVarLocalItemName,
        inScreenName: jVarLocalScreenName,
        inBodyAsJson: localUpdateBodyAsJson
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };