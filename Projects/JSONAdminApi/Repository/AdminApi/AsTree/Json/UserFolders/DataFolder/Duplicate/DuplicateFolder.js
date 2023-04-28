let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/DataFolder/Duplicate/DuplicateFolder");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({ inFolderName, inToFolderName, inDataPK }) => {
    return await Dal.Clone({ inFolderName, inToFolderName, inDataPK })
};
