let CommonDatadupply = require("../../../../../../../DataSupply/Fs/Reports/LedgerAutoJsonFile/Utilities/import");


let PostFunc = async ({ DataPK, ToName, ReportConfigObject }) => {
    let LocalDataPk = DataPK;
    let LocalToName = ToName;
    let LocalReportConfigObject = ReportConfigObject;

    if (LocalDataPk > 0) {
        return await CommonDatadupply.StartFunc({ DataPK: LocalDataPk, ToName:LocalToName, ReportConfigObject:LocalReportConfigObject })
    };
};

module.exports = {
    PostFunc
};
