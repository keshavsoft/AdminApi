let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/CreateNew/InsertKey");

exports.PostFunc = async ({ DataPK, inNewKeyName }) => {
    let LocalinNewKeyName = inNewKeyName;

    return await Dal.PostFunc({
        DataPK,
        inNewKeyName: LocalinNewKeyName
    });
};

exports.DeleteFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    return await Dal.DeleteFunc({
        DataPK, inFolderName: LocalFolderName
    });
};

exports.GetFunc = async ({ DataPK }) => {
    return await Dal.GetFunc({
        DataPK
    });
};
