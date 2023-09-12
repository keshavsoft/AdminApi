let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/ItemName/InsertNew/InsertNew");

exports.PostFunc = async ({ DataPK, inFolderName, inFileName, inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inNewItemName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inNewItemName: LocalItemName
    });
};
exports.DeleteFunc = async ({ DataPK, inFolderName, inFileName, inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inNewItemName;

    return await Dal.DeleteFunc({
        DataPK, inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inNewItemName: LocalItemName
    });
};

exports.GetFunc = async ({ DataPK }) => {

    return await Dal.GetFunc({
        DataPK
    });
};
