let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableInfo/SubMenu/TableRowOptions/Delete");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inGridName, inBodyAsJson }) => {
    return await Dal.Update({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inGridName, inBodyAsJson })
};
