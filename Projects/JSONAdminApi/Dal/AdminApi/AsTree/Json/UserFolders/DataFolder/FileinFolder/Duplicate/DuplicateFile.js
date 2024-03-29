let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/AsTree/UserFolder/UserFile/ForDuplicate");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/Duplicate/DuplicateUserFolder");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Clone = async ({ inFolderName, inFileNameOnly, inToFileName, inDataPK }) => {
    let LocalinDataPK = inDataPK;

    if (LocalinDataPK > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ inFolderName, inFileNameOnly, inToFileName, inDataPK: LocalinDataPK });
    };
};

module.exports = {
    GetFuncs, Clone
};
