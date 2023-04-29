let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableColumns/Duplicate/DuplicateFolder");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/Duplicate/DuplicateFileAsFolder");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Clone = async ({ inFolderName, inFileNameOnly, inToFileName, inDataPK }) => {
    let LocalinDataPK = inDataPK;

    if (LocalinDataPK > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ inFolderName, inFileNameOnly, inToFileName, inDataPK: LocalinDataPK })
    };
};

module.exports = {
    GetFuncs, Clone
};
