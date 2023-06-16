let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/ConfigKey/ColumnsKey");

exports.PostFunc = async ({ DataPK, inKeyName, inArrayAsString  }) => {
    let localinKeyName = inKeyName;
    let LocalinArrayAsString = inArrayAsString;

    return await Dal.PostFunc({
        DataPK,
        inKeyName: localinKeyName,
        inArrayAsString: LocalinArrayAsString
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
