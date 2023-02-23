let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromVoucheConsider/Duplicate");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/JoinTablesColumns/Duplicate");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Duplicate = async ({ inDataPK, ReportName, inVoucherConsiderpk }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ inDataPK: LocalDataPk, ReportName, inVoucherConsiderpk })
    };
};

module.exports = {
    GetFuncs, Duplicate
};
