//let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/Toggles/GetData");
//let CommonDataSupplyPostFunc = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/FromKeys/Toggles/Update");

let GetFuncs = async ({ inDataPK }) => {
    if (inDataPK > 0) {
        //return await CommonDatasupply.StartFunc({ DataPK:inDataPK });
    };
};

let Delete = async ({ inDataPK, inReportName, inVoucherPk }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return "this dal"
       // return await CommonDataSupplyForUpdate.Update({ inDataPK, inReportName, inVoucherPk })
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
    GetFuncs, Delete, PostFunc
};
