let Dal = require("../../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/ScreenName/TableColumns/CreateNew/CreateColumn");

exports.PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName, inNewColumnName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;
    let LocalNewColumnName = inNewColumnName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inItemName: LocalItemName,
        inNewScreenName: LocalScreenName,
        inNewColumnName: LocalNewColumnName
    });
};

exports.DeleteFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName, inNewColumnName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;
    let LocalNewColumnName = inNewColumnName;


    return await Dal.DeleteFunc({
        DataPK, inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inItemName: LocalItemName,
        inNewScreenName: LocalScreenName,
        inNewColumnName: LocalNewColumnName

    });
};

exports.GetFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName, inNewColumnName }) => {
    return await Dal.GetFunc({
        DataPK
    });
};