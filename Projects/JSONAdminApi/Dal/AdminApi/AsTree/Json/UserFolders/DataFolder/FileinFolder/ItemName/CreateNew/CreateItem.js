let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/ItemNameOnly");
let CommonDatasupplyGetFunc = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/getDirectoriesWithCheckAndDelete");

let path = require("path");

let PostFunc = async ({ DataPK, inFolderName, inFileName, inNewItemName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inNewItemName;

    if (DataPK > 0) {
        return CommonDatasupply.StartFuncNoAsync({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileNameOnly: path.parse(LocalFileName).name,
            inItemName: LocalItemName
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


let GetFunc = async ({ DataPK }) => {

    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.AsObject({
            inDataPK: DataPK,
        });
        // return await (LocalItemName);
    };
};
module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
