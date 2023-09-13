let Repos = require("../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/ItemName/ShowAll");

let PostFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;

   let LocalFromRepo = await Repos.PostFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
   });

   res.json(LocalFromRepo);
};

module.exports = { PostFunc };