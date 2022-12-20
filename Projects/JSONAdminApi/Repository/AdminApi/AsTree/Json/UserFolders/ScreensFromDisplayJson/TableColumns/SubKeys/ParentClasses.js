let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ParentClasses");

let Update = async ({ inDataPk }) => {
    let LocalinDataPk = inDataPk;
    if (LocalinDataPk > 0) {
        return await Dal.Update({ inDataPk });
    }
};

module.exports = { AsArray };