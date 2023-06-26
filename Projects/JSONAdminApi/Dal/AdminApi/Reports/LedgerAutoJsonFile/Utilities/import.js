let CommonDatadupply = require("../../../../../../../DataSupply/Fs/Reports/LedgerAutoJsonFile/Utilities/import");

let PostFunc = async ({ DataPK, ToName, ReportConficObject }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDatadupply.StartFunc({ DataPK: LocalDataPk, ToName, ReportConficObject })
    };
};

module.exports = {
    PostFunc
};
