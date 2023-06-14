// let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/CreateFolder");
let CommonDatasupplyDeleteFolder = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/AdminFolder/PreloadJsonFile/FromKey/Delete/FromKey");
//let CommonDatasupplyGetFunc = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/AdminFolder/PreloadJsonFile/ItemConfig/CheckItemConfig");

let PostFunc = async ({ DataPK, inFolderName }) => {
    return await "From DAL";
    // let LocalFolderName = inFolderName;

    // if (DataPK > 0) {
    //     return await CommonDatasupply.StartFunc({
    //         inDataPK: DataPK,
    //         inFolderName: LocalFolderName
    //     });
    // };
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
    return await "From DAL";
    // if (DataPK > 0) {
    //     return await CommonDatasupplyGetFunc.StartFunc({
    //         DataPK,
    //         KeyName
    //     });
    // };
};

module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
