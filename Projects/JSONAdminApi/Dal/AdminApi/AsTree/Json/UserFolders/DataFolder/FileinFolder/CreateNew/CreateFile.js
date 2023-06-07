let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/UserFile/CreateFile");
let CommonDatasupplyGetFunc = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/getDirectoriesWithCheckAndDelete");

let PostFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            DataPK,
            FolderName: LocalFolderName,
            NewFileName: LocalFileName
        });
        // return await (inFileName)
    };
};

let DeleteFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inNewFileName: LocalFileName
        });
        // return await (inFileName)
    };
};

let GetFunc = async ({ DataPK }) => {

    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.AsObject({
            inDataPK: DataPK
        });
        // return await (inFileName)
    };
};

module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
