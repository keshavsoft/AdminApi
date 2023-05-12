let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigFolder/FromReturnData/SubTable/Footer");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        inDataPK: LocalDataPk
    });
    // console.log("LocalFromRepo:",LocalFromRepo.Folders.Masters.Files.Accounts.Items.Accounts.Screens.Create);
    res.json(LocalFromRepo)
};


let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalfolderName = req.body.folderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalScreenName = req.body.ScreenName;
    let jVarLocalDataAttribute = req.body.DataAttribute;
    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        inDataPK: LocalDataPk,
        inFolderName: jVarLocalfolderName,
        inFileNameOnly: jVarLocalFileName,
        inItemName: jVarLocalItemName,
        inScreenName: jVarLocalScreenName,
        DataAttribute: jVarLocalDataAttribute,
        BodyAsJson: localUpdateBodyAsJson
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };