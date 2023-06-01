let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder");

exports.PostFunc = async ({ DataPK }) => {
    return await Dal.PostFunc({ DataPK });
};
