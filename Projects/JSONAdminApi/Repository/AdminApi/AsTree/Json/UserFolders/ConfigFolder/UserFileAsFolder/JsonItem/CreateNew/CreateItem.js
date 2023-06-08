let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/CreateNew/CreateItem");

exports.GetFunc = async ({ DataPK }) => {

    return await Dal.GetFunc({
        DataPK,
    });
};

exports.PostFunc = async ({ DataPK, inFolderName, inFileName, inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalinNewItemName = inNewItemName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inNewItemName: LocalinNewItemName
    });
};

exports.DeleteFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    return await Dal.DeleteFunc({
        DataPK, inFolderName: LocalFolderName,
        inNewFileName: LocalFileName
    });
};