let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/ItemName/CreateNew/CreateItemWithData");

let PostFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.ItemName;
   let LocalData = req.body.NewData;

   let LocalFromRepo = await Repos.PostFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inItemName: LocalItemName,
      inNewData: LocalData
   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};
let DeleteFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.ItemName;
   let LocalData = req.body.DeleteData;

   let LocalFromRepo = await Repos.DeleteFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inItemName: LocalItemName,
      inNewData: LocalData
   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};
let GetFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;

   let LocalFromRepo = await Repos.GetFunc({
      DataPK: LocalDataPk
   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};
module.exports = { PostFunc, DeleteFunc, GetFunc };