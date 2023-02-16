let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/VouchersConsider");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({ DataPK,  ReportName, inVoucherConsiderpk }) => {
    return await Dal.Clone({ DataPK,  ReportName, inVoucherConsiderpk })
};
