let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromVoucheConsider/Duplicate");
let CommonDataSupplyForCreate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/CreateNew/CreateNew");

let GetFuncs = async ({ inDataPK }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: LocalDataPk });
    };
};

let CreateNewFunc = async ({ inDataPK, inReportName, inFolderName, inFileName, inItemName }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForCreate.StartFunc({ inDataPK: LocalDataPk, ReportName: inReportName, FolderName: inFolderName, FileName: inFileName, ItemName: inItemName })
    };
};

module.exports = {
    GetFuncs, CreateNewFunc
};
