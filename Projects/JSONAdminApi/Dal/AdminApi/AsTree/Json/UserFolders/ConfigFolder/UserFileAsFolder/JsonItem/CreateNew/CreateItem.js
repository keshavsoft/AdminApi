let CommonDatasupplyGetFunc = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/getDirectoriesWithCheckAndDelete");
let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/PushData/FromInput");

let GetFunc = async ({ DataPK }) => {

    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.AsObject({
            inDataPK: DataPK,
        });
        // return await (inFileName)
    };
};

let PostFunc = async ({ DataPK, inFolderName, inFileName, inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalinNewItemName = inNewItemName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalinNewItemName
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
    PostFunc,
    DeleteFunc,
    GetFunc
};
