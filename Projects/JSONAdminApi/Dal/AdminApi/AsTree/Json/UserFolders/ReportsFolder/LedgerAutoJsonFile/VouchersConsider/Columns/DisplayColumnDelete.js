let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromVoucheConsider/Columns");
let CommonDataSupplyForDelete = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/Columns/DisplayColumnDelete/Delete");
// let CommonDataSupplyForDeleteWithCheck = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/Columns/DisplayColumnDelete/Delete");

let GetFuncs = async ({ inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK });
    };
};

let Delete = async ({ inDataPK, inReportName, inVoucherpk, inColumnpk }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForDelete.StartFunc({ DataPK: LocalDataPk, ReportName: inReportName, Voucherpk: inVoucherpk, Columnpk: inColumnpk })
    };
};

// let DeleteWithCheck = async ({ DataPK: LocalDataPk, ReportName: inReportName, Voucherpk: inVoucherpk, Columnpk: inColumnpk }) => {
//     let LocalDataPk = inDataPK;

//     if (LocalDataPk > 0) {
//         return await CommonDataSupplyForDeleteWithCheck.StartFunc({ DataPK: inDataPK, ReportName: inReportName, Voucherpk: inVoucherpk, Columnpk: inColumnpk })
//     };
// };
module.exports = {
    GetFuncs, Delete
};
