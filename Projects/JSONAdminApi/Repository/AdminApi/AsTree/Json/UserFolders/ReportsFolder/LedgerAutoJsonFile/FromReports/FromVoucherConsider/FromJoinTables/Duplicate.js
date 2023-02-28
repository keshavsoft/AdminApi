let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromJoinTables/Duplicate");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Duplicate = async ({ inDataPK, inReportName, inVouchersConsiderPK, JoinTablesColumnsPK  }) => {
    return await Dal.Duplicate({ inDataPK, inReportName, inVouchersConsiderPK, JoinTablesColumnsPK  })
};
