// let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/ItemNameInsert/ItemNameInsert");
let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/PullDataFromFile/FromFolderAndFile");

let path = require("path");

let PostFunc = async ({ DataPK, inFolderName, inFileName }) => {
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;

    if (DataPK > 0) {
        return CommonDatasupply.StartFunc({
            inDataPK: DataPK,
            inFolderName: LocalFolderName,
            inFileNameOnly: path.parse(LocalFileName).name
        });
    };
};

module.exports = { PostFunc };
