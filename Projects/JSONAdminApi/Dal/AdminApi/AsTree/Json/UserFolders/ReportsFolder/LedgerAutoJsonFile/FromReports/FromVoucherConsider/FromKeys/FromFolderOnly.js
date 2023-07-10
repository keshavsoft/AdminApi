let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromKeys/FromFolder");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/FromFolderOnly/Update");
let CommonDataSupplyForPost =require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/VouchersConsider/Configuration/FromFolderOnly/UpdateWithCheck");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDataSupply.StartFunc({ inDataPK: DataPK });
    };
};

let PostFuncs = async ({  inDataPK,  inReportName, inVoucherPk, inFolderName, inFromFolder }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForPost.Update({ 
            DataPK:inDataPK, 
            ReportName:inReportName,
            VoucherPk:inVoucherPk,
            FolderName:inFolderName,
            FromFolder:inFromFolder
        })
    };
};

let Update = async ({  DataPK,  ItemName, voucher, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ DataPK,  ItemName, voucher, BodyAsJson })
    };
};

module.exports = {
    GetFuncs, Update, PostFuncs
};
