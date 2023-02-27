let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromJoinTablesColumns/DisplayColumns");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ inDataPK, inReportName, inVouchersConsiderPK, JoinTablesColumnsPK, BodyAsJson }) => {
    return await Dal.Update({  inDataPK, inReportName, inVouchersConsiderPK, JoinTablesColumnsPK, BodyAsJson })
};
