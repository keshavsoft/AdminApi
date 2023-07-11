//let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromVoucheConsider/Columns");
//let CommonDataSupplyForDelete = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/Columns/DisplayColumn/Update");
//let CommonDataSupplyForDeleteWithCheck = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/Columns/DisplayColumn/Update");

let GetFuncs = async ({ inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonDatasupply.StartFunc({ DataPk:inDataPK });
    };
};

let Delete = async ({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson }) => {
    let LocalDataPk = inDataPk;

    if (LocalDataPk > 0) {
        //return await CommonDataSupplyForDelete.StartFunc({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson})
        return "this dal"
    };
};

let DeleteWithCheck = async ({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson }) => {
    let LocalDataPk = inDataPk;

    if (LocalDataPk > 0) {
        //return await CommonDataSupplyForDeleteWithCheck.StartFunc({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson })
        return "this dal"
    };
};
module.exports = {
    GetFuncs, Delete, DeleteWithCheck
};
