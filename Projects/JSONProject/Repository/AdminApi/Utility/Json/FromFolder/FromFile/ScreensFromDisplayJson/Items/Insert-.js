let Dal = require("../../../../../../../../Dal/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Insert");

exports.Insert =async ({ inFolderName, inFileNameWithExtension, inItemName,inDataPk }) => {
    return await Dal.Insert({ inFolderName, inFileNameWithExtension, inItemName,inDataPk });
    
};
