let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/TableRowOptions/Edit");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inBodyAsJson }) => {
    return await Dal.Update({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inBodyAsJson })
};
