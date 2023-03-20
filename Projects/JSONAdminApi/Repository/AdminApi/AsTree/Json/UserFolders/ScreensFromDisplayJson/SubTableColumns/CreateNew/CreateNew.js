let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/CreateNew/CreateNew");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Create = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, ColumnName }) => {
    return await Dal.Create({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, ColumnName })
};
