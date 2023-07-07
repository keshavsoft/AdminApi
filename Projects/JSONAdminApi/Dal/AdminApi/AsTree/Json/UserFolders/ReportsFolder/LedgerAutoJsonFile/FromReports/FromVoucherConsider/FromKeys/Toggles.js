let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/Toggles/GetData");
let CommonDataSupplyPostFunc = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/Toggles/Update");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Update = async ({ DataPK, ItemName, voucher, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ DataPK, ItemName, voucher, BodyAsJson })
    };
};

let PostFunc = async ({ inDataPK, inReportName, inVoucherPk, inActive }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyPostFunc.StartFunc({
            DataPK: inDataPK,
            ReportName: inReportName,
            VoucherPk: inVoucherPk,
            Active: inActive
        })
    };
};

module.exports = {
    GetFuncs, Update, PostFunc
};
