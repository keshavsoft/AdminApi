let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/CreateNew/CreateFile");

let PostFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.NewFolderName;
    let LocalFileName = req.body.NewinFileName;

    console.log("LocalFolderName : ", LocalFolderName);
    let LocalFromRepo = await Repos.PostFunc({
        DataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileName: LocalFileName
    });

    res.json(LocalFromRepo);
    //res.end("test")
};




module.exports = { PostFunc };