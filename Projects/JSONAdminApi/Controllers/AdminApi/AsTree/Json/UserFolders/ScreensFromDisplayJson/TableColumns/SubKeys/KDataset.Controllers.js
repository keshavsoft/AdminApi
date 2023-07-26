let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/KDataset");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });

    res.json(LocalFromRepo);
};

let Update = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalfolderName = req.body.folderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalScreenName = req.body.ScreenName;
    let jVarLocalDataAttribute = req.body.DataAttribute;
    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        DataPK: LocalDataPk,
        folderName: jVarLocalfolderName,
        FileName: jVarLocalFileName,
        ItemName: jVarLocalItemName,
        ScreenName: jVarLocalScreenName,
        DataAttribute: jVarLocalDataAttribute,
        BodyAsJson: localUpdateBodyAsJson
    });
    res.end(JSON.stringify(LocalFromRepo));
};
module.exports = { GetFuncs, Update };