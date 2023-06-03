let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/UserFile/ItemName/ScreenName/CreateScreen");

let PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName,inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileName: LocalFileName,
            inItemName: LocalItemName,
            inScreenName:LocalScreenName
        });
        // return await (LocalItemName);
        
    };
    res.end("DAl checking")
};

module.exports = {
    PostFunc
};
