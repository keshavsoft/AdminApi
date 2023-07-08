let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromKeys/FromFolder");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/FromFolderOnly/Update");
let CommonDataSupplyForPost =require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/FromFolderOnly/Update");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let PostFuncs = async ({  DataPK,  ItemName, voucher, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForPost.StartFunc({ DataPK,  ItemName, voucher, BodyAsJson })
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
