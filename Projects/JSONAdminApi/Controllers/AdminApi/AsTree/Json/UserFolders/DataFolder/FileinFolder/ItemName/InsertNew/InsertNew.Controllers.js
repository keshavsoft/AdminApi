let Repos = require("../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/ItemName/InsertNew/InsertNew");

let PostFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.NewItemName;

   let LocalFromRepo = await Repos.PostFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inNewItemName: LocalItemName
   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};
let DeleteFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.DeleteItemName;

   let LocalFromRepo = await Repos.DeleteFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inNewItemName: LocalItemName
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
module.exports = { PostFunc,DeleteFunc,GetFunc };