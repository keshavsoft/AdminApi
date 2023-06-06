let CommonDatasupplyGetFunc = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/GetTree");
let CommonDatasupplyCreateFolder = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/CreateFolder/FromInput");
let CommonDatasupplyDeleteFolder = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/DeleteFolder/FromInput");

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
