let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableColumns/CreateNew/DuplicateSreen");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/Duplicate/DuplicateItemName");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Clone = async ({  inDataPK, inFolderName, inFileNameOnly, inItemName, inToItemName }) => {
    let LocalinDataPK = inDataPK;

    if (LocalinDataPK > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({  inDataPK, inFolderName, inFileNameOnly, inItemName, inToItemName })
    };
};

module.exports = {
    GetFuncs, Clone
};
