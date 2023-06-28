//let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableInfo/SubMenu/TableRowOptions/Delete");
//let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableInfo/SubMenu/TableRowOptions/Delete/Update")

let GetFuncs = async ({ DataPK }) => {
    // if (DataPK > 0) {
    //     return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    // };
    return "this is dal"
};

let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    // if (LocalDataPk > 0) {
    //     return await CommonDataSupplyForUpdate.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, BodyAsJson })
    // };
    return "this is dal"
};

module.exports = {
    GetFuncs, Update
};
