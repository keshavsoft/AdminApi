//let Repos = require("../../../../../Repository/AdminApi/Utility/Json/File/Insert");

let PostFunc = (req, res, next) => {
    let LocalBody = req.body;
    console.log("LocalBody : ", LocalBody);

    // Repos.Bulk({
    //     inFolderName: LocalFolderName,
    //     inBody: LocalBody,
    //     inUserPK: req.KeshavSoft.DataPk
    // }).then(PromiseData => {
    //     res.json(PromiseData);
    // }).catch(PromiseError => {
    //     res.end(JSON.stringify(PromiseError));
    // });

    res.json({});
};

module.exports = { PostFunc };