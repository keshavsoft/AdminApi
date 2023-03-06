let CommonDatasupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromVoucheConsider/JoinTables/Duplicate");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/InsideReport/VouchersConsider/InsideVouchersConsider/JoinTables/Duplicate");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK: DataPK });
    };
};

let Duplicate = async ({ inDataPK, inReportName, inVouchersConsiderPK, JoinTablesKey }) => {
    let LocalDataPk = inDataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({ inDataPK, inReportName, inVouchersConsiderPK, JoinTablesColumnsPK:JoinTablesKey })
    };
};

module.exports = {
    GetFuncs, Duplicate
};
