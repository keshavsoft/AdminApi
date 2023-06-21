//let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableInfo/SubMenu/TableRowOptions/Delete");
//let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableInfo/SubMenu/TableRowOptions/Delete/Update")

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

let Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inGridName, inBodyAsJson }) => {
    let LocalDataPk = inDataPK;
    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({
            DataPk:inDataPK,
            folderName: inFolderName,
            FileName:inFileName,
            ItemName:inItemName,
            ScreenName:inScreenName,
            GridName:inGridName,
            BodyAsJson:inBodyAsJson
        })
    };
};

module.exports = {
    GetFuncs, Update
};
