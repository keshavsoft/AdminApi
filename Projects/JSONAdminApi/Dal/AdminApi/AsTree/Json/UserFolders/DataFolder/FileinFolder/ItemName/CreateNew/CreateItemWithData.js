//let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/ItemNameOnly");
//let CommonDatasupplyGetFunc = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/getDirectoriesWithCheckAndDelete");

let path = require("path");

let PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewData }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalData = inNewData;

    if (DataPK > 0) {
        return "this is Dal";
        // return CommonDatasupply.StartFuncNoAsync({
        //     inDataPK: DataPK,
        //     inFolderName: LocalFolderName,
        //     inFileNameOnly: path.parse(LocalFileName).name,
        //     inItemName: LocalItemName
        //inNewData:LocalData
        // });
        // return await (LocalItemName);
    };
};


let DeleteFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewData }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalData = inNewData;

    if (DataPK > 0) {
        return "this is Dal";
        // return await CommonDatasupply.StartFunc({
        //     inDataPK: DataPK,
        //     inFolderName: LocalFolderName,
        //     inFileName: LocalFileName,
        //     inNewItemName: LocalItemName
        //inNewData:LocalData
        // });
        // return await (LocalItemName);
    };
};


let GetFunc = async ({ DataPK }) => {

    if (DataPK > 0) {
        return "this is Dal";
        // return await CommonDatasupplyGetFunc.AsObject({
        //     inDataPK: DataPK,
        // });
        // return await (LocalItemName);
    };
};
module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
