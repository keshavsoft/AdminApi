let CommonDatasupplyGetFunc = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/getDirectoriesWithCheckAndDelete");
let CommonDatasupplyCreateFolder = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/CreateFolder/FromInput");
let CommonDatasupplyDeleteFolder = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/DeleteFolder/FromInput");

let GetFunc = async ({ DataPK }) => {

    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.AsObject({
            inDataPK: DataPK
        });
    };
};

let PostFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    if (DataPK > 0) {
        return await CommonDatasupplyCreateFolder.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName
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

module.exports = {
    GetFunc,
    PostFunc,
    DeleteFunc
};