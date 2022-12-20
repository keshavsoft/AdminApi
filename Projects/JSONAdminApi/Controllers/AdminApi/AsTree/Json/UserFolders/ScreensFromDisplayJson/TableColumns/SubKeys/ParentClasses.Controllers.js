// let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ParentClasses");

let Update = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    console.log("LocalDataPk----", LocalDataPk);

    let LocalFromRepo = await Repos.Update({
        DataPK: LocalDataPk,
    });
    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};
module.exports = { Update };