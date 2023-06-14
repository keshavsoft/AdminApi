let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/CreateNew/InsertKey");

let PostFunc = async (req, res) => {
    res.end("FromPost")
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalinNewKeyName = req.body.inNewKeyName;

    let LocalFromRepo = await Repos.PostFunc({
        DataPK: LocalDataPk,
        inNewKeyName: LocalinNewKeyName
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
    console.log("jat8");
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFunc({
        DataPK: LocalDataPk
    });

    res.json(LocalFromRepo);
    //res.end("test")
};



module.exports = { PostFunc, DeleteFunc, GetFunc };
