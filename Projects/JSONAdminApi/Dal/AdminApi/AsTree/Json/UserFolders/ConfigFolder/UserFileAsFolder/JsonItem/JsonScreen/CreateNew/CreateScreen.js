let CommonDatasupplyGetFunc = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/getDirectoriesWithCheckAndDelete");
let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/CreateFileAsFolder/FromInput");

let GetFunc = async ({ DataPK }) => {

    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.AsObject({
            inDataPK: DataPK,
        });
        // return await (inFileName)
    };
};

let PostFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
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

module.exports = {
    GetFunc,
    PostFunc,
    DeleteFunc

};
