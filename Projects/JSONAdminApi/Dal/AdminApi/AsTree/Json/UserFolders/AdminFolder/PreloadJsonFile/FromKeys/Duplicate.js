// let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/CreateFolder");
// let CommonDatasupplyDeleteFolder = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/DeleteFolder");
let CommonDatasupplyGetFunc = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/AdminFolder/PreloadJsonFile/FromKey/Duplicate/GetFunc");

let PostFunc = async ({ DataPK, fromKeyName, inNewKeyName }) => {
    let LocalfromKeyName = fromKeyName;
    let LocalinNewKeyName = inNewKeyName;

    if (DataPK > 0) {
        return await CommonDatasupplyPostFunc.StartFunc({
            DataPK,
            fromKeyName: LocalfromKeyName,
            inNewKeyName: LocalinNewKeyName
        });
    };
};

let DeleteFunc = async ({ DataPK, inFolderName }) => {
    return await "From DAL";
    // let LocalFolderName = inFolderName;

    // if (DataPK > 0) {
    //     return await CommonDatasupplyDeleteFolder.StartFunc({
    //         inDataPK: DataPK,
    //         inFolderName: LocalFolderName
    //     });
    // };
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
