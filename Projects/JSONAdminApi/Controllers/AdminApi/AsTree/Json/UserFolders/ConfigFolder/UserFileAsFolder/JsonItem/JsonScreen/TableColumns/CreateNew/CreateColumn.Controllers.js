let Repos = require("../../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/CreateNew/CreateScreen");

let PostFunc = async (req, res) => {

   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.ItemName;
   let LocalScreenName = req.body.ScreenName;
   let LocalNewColumnName = req.body.NewColumnName;

   let LocalFromRepo = await Repos.PostFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inItemName: LocalItemName,
      inNewScreenName:LocalScreenName,
      inNewColumnName:LocalNewColumnName

   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};

let DeleteFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.ItemName;
   let LocalScreenName = req.body.ScreenName;
   let LocalNewColumnName = req.body.NewColumnName;

   let LocalFromRepo = await Repos.DeleteFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inItemName: LocalItemName,
      inNewScreenName:LocalScreenName,
      inNewColumnName:LocalNewColumnName

   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};

let GetFunc = async (req, res) => {
   let LocalDataPk = req.KeshavSoft.DataPk;
   let LocalFolderName = req.body.FolderName;
   let LocalFileName = req.body.FileName;
   let LocalItemName = req.body.ItemName;
   let LocalScreenName = req.body.ScreenName;
   let LocalNewColumnName = req.body.NewColumnName;

   let LocalFromRepo = await Repos.GetFunc({
      DataPK: LocalDataPk,
      inFolderName: LocalFolderName,
      inFileName: LocalFileName,
      inItemName: LocalItemName,
      inNewScreenName:LocalScreenName,
      inNewColumnName:LocalNewColumnName

   });

   res.json(LocalFromRepo);
   //res.end("testItme");
};


module.exports = { PostFunc,DeleteFunc,GetFunc };