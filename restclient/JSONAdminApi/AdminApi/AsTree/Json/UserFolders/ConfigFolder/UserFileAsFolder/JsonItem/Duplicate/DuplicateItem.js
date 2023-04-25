let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/Duplicate/DuplicateItem");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({  inDataPK, inFolderName, inFileNameOnly, inItemName, inToItemName }) => {
    return await Dal.Clone({  inDataPK, inFolderName, inFileNameOnly, inItemName, inToItemName })
};
