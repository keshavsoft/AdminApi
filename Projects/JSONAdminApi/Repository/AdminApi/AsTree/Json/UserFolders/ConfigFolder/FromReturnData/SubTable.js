let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigFolder/FromReturnData/SubTable");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({ inFolderName, inFileNameOnly, inToFileName, inDataPK }) => {
    return await Dal.Clone({ inFolderName, inFileNameOnly, inToFileName, inDataPK })
};
