let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/AsTree/UserFolder/UserFile/ItemInFile/ForDuplicate");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/Duplicate/DuplicateItemName");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
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
