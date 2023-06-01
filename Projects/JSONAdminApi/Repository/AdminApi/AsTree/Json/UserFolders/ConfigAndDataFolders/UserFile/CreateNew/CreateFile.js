let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/CreateNew/CreateFile");

exports.PostFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inNewFileName: LocalFileName
    });
};
