let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/CreateNew/CreateItem");

exports.PostFunc = async ({ DataPK, inFolderName, inNewFileName,inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;
    let LocalItemName = inNewItemName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inNewFileName: LocalFileName,
        inNewItemName: LocalItemName
    });
};
