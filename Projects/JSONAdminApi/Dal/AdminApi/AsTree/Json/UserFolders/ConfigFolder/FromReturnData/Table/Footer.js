let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/ReturnDataJsonFile/AsTree");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/ReturnDataJsonFile/ItemName/ScreenName/Table/Footer/Update");

let GetFuncs = async ({ inDataPK }) => {
    let localinDataPK = inDataPK;
    if (localinDataPK > 0) {
        return await CommonDatasupply.AsObjectFromCommonCode({ inDataPK:localinDataPK });
    };
};

let Update = async ({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, BodyAsJson }) => {
    let LocalinDataPK = inDataPK;

    if (LocalinDataPK > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update
};
