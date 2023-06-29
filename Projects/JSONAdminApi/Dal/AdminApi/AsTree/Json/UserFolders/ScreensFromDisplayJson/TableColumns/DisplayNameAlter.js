//let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableColumns/Toggles");
//let CommonDataSupplyForUpdate = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableColumns/Toggles/Update")

let GetFuncs = async ({ DataPK }) => {

    return "this dal"
    // if (DataPK > 0) {
    //     return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    // };
};

let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    return "this dal"
    // if (LocalDataPk > 0) {
    //     return await CommonDataSupplyForUpdate.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson })
    // };
};

module.exports = {
    GetFuncs, Update
};
