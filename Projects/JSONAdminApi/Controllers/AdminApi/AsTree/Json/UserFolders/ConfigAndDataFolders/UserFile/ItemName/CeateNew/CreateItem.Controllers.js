let Repos = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CeateNew/CreateItem.Controllers");

let PostFunc = async (req, res) => {
    // let LocalDataPk = req.KeshavSoft.DataPk;
    // let LocalFolderName = req.body.NewFolderName;
    // console.log("LocalFolderName : ", LocalFolderName);
    // let LocalFromRepo = await Repos.PostFunc({
    //     DataPK: LocalDataPk,
    //     inFolderName: LocalFolderName
    // });

    //res.json(LocalFromRepo);
    res.end("test")
};




module.exports = { PostFunc };