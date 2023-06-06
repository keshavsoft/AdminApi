let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/CreateFolder");
let CommonDatasupplyDeleteFolder = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/DeleteFolder");
let CommonDatasupplyGetFunc = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/GetTree");

let PostFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
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

let GetFunc = async ({ DataPK, inFolderName }) => {
    // return ("FromDa------------l")
    let LocalFolderName = inFolderName;

    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName
        });
    };
};

module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
