let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/DuplicateFile");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({ inFolderName, inFileNameOnly, inToFileName, inDataPK }) => {
    return await Dal.Clone({ inFolderName, inFileNameOnly, inToFileName, inDataPK })
};
