let Repos = require("../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/Duplicate/DuplicateFolder");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};


let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    console.log("req.body-------------", req.body);

    let jVarLocalfolderName = req.body.folderName;
    let jVarLocalinToFolderName = req.body.inToFolderName;

    let LocalFromRepo = await Repos.Clone({
        inDataPK: LocalDataPk,
        inFolderName: jVarLocalfolderName,
        inToFolderName: jVarLocalinToFolderName
    });
    // console.log("LocalFromRepo", LocalFromRepo);

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, PatchFuncs };