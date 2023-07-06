let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromKeys/Toggles");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/Toggles/Update");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Update = async ({  DataPK,  ItemName, voucher, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ DataPK,  ItemName, voucher, BodyAsJson })
    };
};


let Post = async ({  inDataPK,  inVoucherPk, invoucher, inFolderName ,inFileName,inItemName,inItemNameConsider }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ DataPK:inDataPK, VoucherPk:inVoucherPk, voucher:invoucher, FolderName:inFolderName , FileName:inFileName ,ItemName:inItemName,ItemNameConsider:inItemNameConsider})
    };
};

module.exports = {
    GetFuncs, Update ,Post
};
