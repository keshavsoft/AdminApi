//let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/UserFile/ItemName/CreateItem");

let PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName,inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;

    if (DataPK > 0) {
        // return await CommonDatasupply.StartFunc({
        //     inDataPK: DataPK,
        //     inFolderName: LocalFolderName,
        //     inFileName: LocalFileName,
        //     inItemName: LocalItemName,
        //     inNewScreenName:LocalScreenName
        // });
        // return await (LocalItemName);
        
    };
    res.end("DAl checking")
};

module.exports = {
    PostFunc
};