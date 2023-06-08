let CommonDatasupplyGetFunc = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/getDirectoriesWithCheckAndDelete");
// let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/CreateFileAsFolder/FromInput");
let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/PushData/FromInput");

let GetFunc = async ({ DataPK }) => {

    if (DataPK > 0) {
        return await CommonDatasupplyGetFunc.AsObject({
            inDataPK: DataPK
        });
        // return await (inFileName)
    };
};

let PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalinItemName = inItemName;
    let LocalNewScreenName = inNewScreenName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFuncNoSync({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalinItemName,
            inScreenName: LocalNewScreenName
        });
        // return await (inFileName)
    };
};
let DeleteFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inNewFileName;

    if (DataPK > 0) {
        // return await CommonDatasupply.StartFunc({
        //     inDataPK: DataPK,
        //     inFolderName: LocalFolderName,
        //     inNewFileName: LocalFileName
        // });
        // return await (inFileName)
    };
};

module.exports = {
    GetFunc,
    PostFunc,
    DeleteFunc

};
