let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/CreateFolder");

let PostFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName
        });
    };
};
let DeleteFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName
        });
    };
};

let GetFunc = async ({ DataPK, inFolderName }) => {
    return ("FromDal")
    let LocalFolderName = inFolderName;

    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName
        });
    };
};

module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc
};
