let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/ToSubTable/ToSubTableCreate");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Create = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, columnName }) => {
    return await Dal.Create({ DataPK, FolderName, FileName, ItemName, ScreenName, columnName })
};
