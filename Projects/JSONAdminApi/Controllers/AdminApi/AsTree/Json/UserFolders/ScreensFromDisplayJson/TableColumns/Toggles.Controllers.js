let Repos = require("../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Toggles");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk

    }).then(PromiseData => {
        console.log("PromiseData",PromiseData);
        res.end(JSON.stringify(PromiseData));
    }).catch();

};


module.exports = { GetFuncs };