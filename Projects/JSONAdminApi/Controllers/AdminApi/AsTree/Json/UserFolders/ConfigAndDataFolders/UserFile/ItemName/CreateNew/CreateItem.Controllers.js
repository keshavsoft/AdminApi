let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CreateNew/CreateItem");

let PostFunc = async (req, res) => {
     let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileName;
    let LocalItemName = req.body.NewItemName;


    let LocalFromRepo = await Repos.PostFunc({
       DataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileName:LocalItemName
     });

    res.json(LocalFromRepo);
    //res.end("testItme");
};

module.exports = { PostFunc };