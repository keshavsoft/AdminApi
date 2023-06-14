let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/AdminFolder/PreloadJsonFile/FromKey/InsertNew/FromKeys");
// let CommonDatasupplyDeleteFolder = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/DeleteFolder");
// let CommonDatasupplyGetFunc = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/getDirectoriesWithCheckAndDelete");

let PostFunc = async ({ DataPK, inNewKeyName }) => {

    let LocalinNewKeyName = inNewKeyName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            DataPK,
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
    return await "From DAL";

    // if (DataPK > 0) {
    //     return await CommonDatasupplyGetFunc.AsObject({
    //         inDataPK: DataPK
    //     });
    // };
};

module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
