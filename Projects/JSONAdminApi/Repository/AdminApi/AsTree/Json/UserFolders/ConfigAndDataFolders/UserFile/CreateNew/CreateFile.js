let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/CreateNew/CreateFile");

exports.PostFunc = async ({ DataPK, inFolderName,inFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,inFileName: LocalFileName
    });
};
