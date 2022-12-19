let Dal = require("../../../../Dal/AdminApi/Config/TableColumns/Toggles");

exports.Update = async ({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
    Dal.Update({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson })
};