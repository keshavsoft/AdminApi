let Dal = require("../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Toggles");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};
