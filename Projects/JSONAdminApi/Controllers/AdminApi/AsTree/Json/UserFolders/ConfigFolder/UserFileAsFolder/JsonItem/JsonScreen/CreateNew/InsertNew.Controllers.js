let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/CreateNew/InsertNew");

let GetFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFunc({
        DataPK: LocalDataPk
    });

    res.json(LocalFromRepo);
};

let PostFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileName;
    let LocalItemName = req.body.ItemName;
    let LocalScreenName = req.body.ScreenName;
    let LocalScreenNewData = req.body.ScreenNewData;

    let LocalFromRepo = await Repos.PostFunc({
        DataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inItemName: LocalItemName,
        inScreenName: LocalScreenName,
        inScreenNewData: LocalScreenNewData
    });

    res.json(LocalFromRepo);
};

let DeleteFunc = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.DeleteFileName;

    let LocalFromRepo = await Repos.DeleteFunc({
        DataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inNewFileName: LocalFileName
    });

    res.json(LocalFromRepo);
};

module.exports = { PostFunc, DeleteFunc, GetFunc };