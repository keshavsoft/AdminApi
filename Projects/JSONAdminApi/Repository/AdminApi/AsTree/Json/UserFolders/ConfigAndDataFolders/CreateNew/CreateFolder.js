let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder");

exports.GetFuncs = async ({ DataPK }) => {
    // return await "From Repo";
    return await Dal.GetFuncs({ DataPK });
};
