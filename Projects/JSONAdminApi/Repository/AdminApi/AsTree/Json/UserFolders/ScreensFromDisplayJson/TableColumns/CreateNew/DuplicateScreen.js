let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/CreateNew/DuplicateScreen");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, DuplicateScreenName }) => {
    return await Dal.Clone({ DataPK, FolderName, FileName, ItemName, ScreenName, DuplicateScreenName })
};
