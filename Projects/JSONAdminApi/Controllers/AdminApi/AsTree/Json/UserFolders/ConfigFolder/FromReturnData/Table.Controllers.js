let Repos = require("../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigFolder/FromReturnData/Table");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    // console.log("LocalFromRepo:",LocalFromRepo.Folders.Masters.Files.Accounts.Items.Accounts.Screens.Create);
    res.json(LocalFromRepo)
};


let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalfolderName = req.body.folderName;
    let jVarlocalinToFileName = req.body.inToFileName;
    let jVarlocalinFileNameOnly = req.body.inFileNameOnly;

    let LocalFromRepo = await Repos.Clone({
        inDataPK: LocalDataPk,
        inFolderName: jVarLocalfolderName,
        inFileNameOnly: jVarlocalinFileNameOnly,
        inToFileName: jVarlocalinToFileName
    });
    // console.log("LocalFromRepo", LocalFromRepo);

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };