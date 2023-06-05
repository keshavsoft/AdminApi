let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/UserFile/ItemName/CreateItem");

let PostFunc = async ({ DataPK, inFolderName, inFileName, inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inNewItemName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileName: LocalFileName,
            inNewItemName: LocalItemName
        });
        // return await (LocalItemName);
    };
};


let DeleteFunc = async ({ DataPK, inFolderName, inFileName, inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inNewItemName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileName: LocalFileName,
            inNewItemName: LocalItemName
        });
        // return await (LocalItemName);
    };
};
module.exports = {
    PostFunc,
    DeleteFunc
};
