let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/AdminFolder/PreloadJsonFile/JsonConfig/Update");
// let CommonDatasupplyDeleteFolder = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/AdminFolder/PreloadJsonFile/FromKey/Delete/FromKey");
let CommonDatasupplyGetFunc = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/AdminFolder/PreloadJsonFile/FromKey/Duplicate/GetFunc");

let PostFunc = async ({ DataPK, inKeyName, inBodyAsJson }) => {
    let localinKeyName = inKeyName;
    let LocalBodyAsJson = inBodyAsJson;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            DataPK,
            KeyName: localinKeyName,
            BodyAsJson: LocalBodyAsJson
        });
    };
};

let DeleteFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    if (DataPK > 0) {
        return await CommonDatasupplyDeleteFolder.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName
        });
    };
};

let GetFunc = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.StartFunc({
            DataPK
        });
    };
};

module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
