let Repos = require("../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder");

let PostFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.NewFolderName;
    
    let LocalFromRepo = await Repos.PostFunc({
        DataPK: LocalDataPk,
        inFolderName: LocalFolderName
    });

    res.json(LocalFromRepo);
    //res.end("test")
};




module.exports = { PostFunc };