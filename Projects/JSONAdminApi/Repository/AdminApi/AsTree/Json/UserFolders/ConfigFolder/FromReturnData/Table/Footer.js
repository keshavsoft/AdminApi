let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigFolder/FromReturnData/Table/Footer");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.Update = async ({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, BodyAsJson }) => {
    return await Dal.Update({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, BodyAsJson })
};
