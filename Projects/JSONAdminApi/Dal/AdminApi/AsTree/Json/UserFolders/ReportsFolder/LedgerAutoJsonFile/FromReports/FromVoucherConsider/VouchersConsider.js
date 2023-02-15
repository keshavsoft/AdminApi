let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/VouchersConsider");
let CommonDataSupplyForUpdate = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/Dublicate");
let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Clone = async ({ DataPK, ReportName, inVoucherConsiderpk }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ inDataPK: LocalDataPk, ReportName, inVoucherConsiderpk })
    };
};

module.exports = {
    GetFuncs, Clone
};
