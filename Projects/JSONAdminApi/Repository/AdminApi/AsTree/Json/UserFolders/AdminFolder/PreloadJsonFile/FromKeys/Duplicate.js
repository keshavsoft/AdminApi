let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/Duplicate");

exports.PostFunc = async ({ DataPK, fromKeyName, inNewKeyName }) => {

    let LocalfromKeyName = fromKeyName;
    let LocalinNewKeyName = inNewKeyName;
    return await Dal.PostFunc({
        DataPK,
        fromKeyName: LocalfromKeyName,
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
