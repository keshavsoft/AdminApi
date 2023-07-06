let Repo = require("../../../Repository/AdminApi/FromData/GetFoldersAsArray")
let GetFunc = (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = Repo.GetFunc({
        inDataPK: LocalDataPk
    });

    res.json(LocalFromRepo);
};


module.exports = { GetFunc };