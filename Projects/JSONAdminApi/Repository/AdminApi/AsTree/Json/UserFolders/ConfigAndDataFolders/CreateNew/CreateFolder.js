let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder");

exports.PostFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName
    });
};
