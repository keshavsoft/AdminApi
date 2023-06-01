let Repos = require("../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });

    res.json(LocalFromRepo);
    //res.end("test")
};




module.exports = { GetFuncs };