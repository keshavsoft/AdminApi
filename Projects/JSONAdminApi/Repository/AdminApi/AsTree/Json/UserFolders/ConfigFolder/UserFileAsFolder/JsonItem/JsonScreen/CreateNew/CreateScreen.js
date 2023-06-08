let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/JsonItem/JsonScreen/CreateNew/CreateScreen");

exports.GetFunc = async ({ DataPK }) => {

    return await Dal.GetFunc({
        DataPK
    });
};

exports.PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalinItemName = inItemName;
    let LocalinNewFileName = inNewFileName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inItemName: LocalinItemName,
        inNewScreenName: LocalinNewFileName
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