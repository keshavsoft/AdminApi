let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/UserFile/CreateFile");

let PostFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
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

let GetFunc = async ({ DataPK, inFolderName, inNewFileName }) => {
     return("FromDal")
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
