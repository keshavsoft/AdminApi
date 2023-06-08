let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/PushDataToFile/FromInput");


//let CommonDatasupplyGetFunc = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/getDirectoriesWithCheckAndDelete");

let CommonDatasupplyGetFunc = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/getDirectoriesWithCheckAndDelete");


let PostFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    if (DataPK > 0) {
        return await CommonDatasupply.CreateFileWithData({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inData: {}
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
