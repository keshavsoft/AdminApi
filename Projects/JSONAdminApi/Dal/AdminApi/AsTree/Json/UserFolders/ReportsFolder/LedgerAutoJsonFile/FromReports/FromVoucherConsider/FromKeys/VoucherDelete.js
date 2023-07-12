let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/Delete/GetData");
let CommonDataSupplyDelete = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/Delete/Delete");

let GetFuncs = async ({ inDataPK }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK });
    };
};

let DeleteFunc = async ({ inDataPK, inReportName, inVoucherPk }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyDelete.StartFunc({
            DataPK: LocalDataPk,
            ReportName: inReportName,
            VoucherPk: inVoucherPk
        })
    };
};

let PostFunc = async ({ inDataPK, inReportName, inVoucherPk }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return "this dal"
        //return await CommonDataSupplyPostFunc.StartFunc({ inDataPK, inReportName, inVoucherPk })
    };
};

module.exports = {
    GetFuncs, DeleteFunc, PostFunc
};
