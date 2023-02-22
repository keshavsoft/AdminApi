let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/Duplicate");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Duplicate = async ({ inDataPK, ReportName, inVoucherConsiderpk  }) => {
    return await Dal.Duplicate({ inDataPK, ReportName, inVoucherConsiderpk  })
};
