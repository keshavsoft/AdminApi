// let CommonDatasupply = require("../../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigAndData/UserFolder/UserFile/ItemName/ScreenName/TableColumns/CreateColumn");
let CommonDatasupply = require("../../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableColumns/CreateNew/InsertNewColumn");

let PostFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inScreenName, inNewColumnName }) => {

    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inScreenName;
    let LocalNewColumnName = inNewColumnName;

    let LocalFromDataSupply;

    if (DataPK > 0) {
        LocalFromDataSupply = await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalItemName,
            inScreenName: LocalScreenName,
            inNewColumnName: LocalNewColumnName

        });
    };

    return await LocalFromDataSupply;
};

let DeleteFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;
    let LocalNewColumnName = inNewColumnName;


    let LocalFromDataSupply;

    if (DataPK > 0) {
        LocalFromDataSupply = await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileName: LocalFileName,
            inItemName: LocalItemName,
            inScreenName: LocalScreenName,
            inNewColumnName: LocalNewColumnName

        });
    };

    return await LocalFromDataSupply;
};

let GetFunc = async ({ DataPK, inFolderName, inFileName, inItemName, inNewScreenName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalItemName = inItemName;
    let LocalScreenName = inNewScreenName;
    let LocalNewColumnName = inNewColumnName;


    let LocalFromDataSupply;

    if (DataPK > 0) {
        LocalFromDataSupply = await CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileName: LocalFileName,
            inItemName: LocalItemName,
            inScreenName: LocalScreenName,
            inNewColumnName: LocalNewColumnName

        });
    };

    return await LocalFromDataSupply;
};



module.exports = {
    PostFunc,
    DeleteFunc,
    GetFunc

};
