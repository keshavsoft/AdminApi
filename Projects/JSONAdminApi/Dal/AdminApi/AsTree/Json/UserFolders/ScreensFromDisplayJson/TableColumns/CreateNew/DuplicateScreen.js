let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableColumns/CreateNew/DuplicateSreen");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableColumns/CreateNew/DuplicateScreen/Clone");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Clone = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, DuplicateScreenName }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Clone({ DataPK, FolderName, FileName, ItemName, ScreenName, DuplicateScreenName })
    };
};

module.exports = {
    GetFuncs, Clone
};
