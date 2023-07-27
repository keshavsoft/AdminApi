let CommonDatasupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromVoucheConsider/DisplayToggles");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/Columns/DisplayToggles/Update");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Update = async ({ DataPK, ReportName, voucherconsiderpk, columnpk, BodyAsJson,DataAttribute }) => {
    // return "Dal-----"
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ inDataPK: LocalDataPk, ReportName, voucherconsiderpk, columnpk, BodyAsJson,DataAttribute })
    };
};

module.exports = {
    GetFuncs, Update
};
