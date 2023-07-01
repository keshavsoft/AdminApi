let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableInfo/SubMenu/TableRowOptions/Edit");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableInfo/SubMenu/TableRowOptions/Edit/Update")

let GetFuncs = async ({ inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK });
    };

};

let Update = async ({ inDataPK, inFolderName, inFileName, inItemName, inScreenName, inBodyAsJson }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({
            DataPK: LocalDataPk,
            FolderName: inFolderName,
            FileName: inFileName,
            ItemName: inItemName,
            ScreenName: inScreenName,
            BodyAsJson: inBodyAsJson
        })
    };

};

module.exports = {
    GetFuncs, Update
};
