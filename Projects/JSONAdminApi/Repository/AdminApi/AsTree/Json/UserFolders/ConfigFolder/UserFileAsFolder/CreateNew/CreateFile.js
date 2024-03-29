let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ConfigFolder/UserFileAsFolder/CreateNew/CreateFile");

exports.GetFunc = async ({ DataPK }) => {

    return await Dal.GetFunc({
        DataPK,
    });
};

exports.PostFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    return await Dal.PostFunc({
        DataPK, inFolderName: LocalFolderName,
        inNewFileName: LocalFileName
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