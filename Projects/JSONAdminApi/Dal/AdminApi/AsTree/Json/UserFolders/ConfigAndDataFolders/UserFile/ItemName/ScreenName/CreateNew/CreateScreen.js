let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/UserFile/ItemName/ScreenName/CreateScreen");

let PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;

    let LocalFromDataSupply;

    if (DataPK > 0) {
        LocalFromDataSupply = await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            FolderName: LocalFolderName,
            FileName: LocalFileName,
            ItemName: LocalItemName,
            NewScreenName: LocalScreenName
        });
    };

    return await LocalFromDataSupply;
};

let DeleteFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;

    let LocalFromDataSupply;

    if (DataPK > 0) {
        LocalFromDataSupply = await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileName: LocalFileName,
            inItemName: LocalItemName,
            inScreenName: LocalScreenName
        });
    };

    return await LocalFromDataSupply;
};

let GetFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName }) => {
    return ("FromDal")

    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;

    let LocalFromDataSupply;

    if (DataPK > 0) {
        LocalFromDataSupply = await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileName: LocalFileName,
            inItemName: LocalItemName,
            inScreenName: LocalScreenName
        });
    };

    return await LocalFromDataSupply;
};


module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
