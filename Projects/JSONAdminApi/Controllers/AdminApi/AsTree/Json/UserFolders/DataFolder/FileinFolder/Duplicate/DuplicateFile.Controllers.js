let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/Duplicate/DuplicateFile");

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
    let jVarlocalinToFileName = req.body.inToFileName;
    let jVarlocalinFileNameOnly = req.body.inFileNameOnly;

    let LocalFromRepo = await Repos.Clone({
        inDataPK: LocalDataPk,
        inFolderName: jVarLocalfolderName,
        inFileNameOnly: jVarlocalinFileNameOnly,
        inToFileName: jVarlocalinToFileName
    });
    // console.log("LocalFromRepo", LocalFromRepo);

    res.status(200).json(LocalFromRepo);
};


module.exports = { GetFuncs, PatchFuncs };