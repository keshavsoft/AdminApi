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

let DeleteFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.DeleteFolderName;

    let LocalFromRepo = await Repos.DeleteFunc({
        DataPK: LocalDataPk,
        inFolderName: LocalFolderName
    });

    res.json(LocalFromRepo);
    //res.end("test")
};

let GetFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFunc({
        DataPK: LocalDataPk
    });

    res.json(LocalFromRepo);
    //res.end("test")
};



module.exports = { PostFunc, DeleteFunc, GetFunc };
