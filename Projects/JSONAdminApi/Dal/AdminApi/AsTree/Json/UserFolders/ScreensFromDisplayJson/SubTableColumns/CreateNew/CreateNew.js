let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForSubTableColumns/CreateNew/CreateNew");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/SubTableColumns/CreateNew/Create")

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Create = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, ColumnName }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Create({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, ColumnName })
    };
};

module.exports = {
    GetFuncs, Create
};
