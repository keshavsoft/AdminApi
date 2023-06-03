let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/ScreenName/CreateNew/CreateScreen");

exports.PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName,inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inItemName: LocalItemName,
        inNewScreenName:LocalScreenName
    });
};
