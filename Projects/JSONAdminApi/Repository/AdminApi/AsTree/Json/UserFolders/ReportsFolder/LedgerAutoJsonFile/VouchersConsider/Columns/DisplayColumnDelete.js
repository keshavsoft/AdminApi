let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.Delete = async ({ inDataPK, inReportName, inVoucherpk, inColumnpk }) => {
    return await Dal.Delete({ inDataPK, inReportName, inVoucherpk, inColumnpk  })
};

exports.DeleteWithCheck = async ({ inDataPK, inReportName, inVoucherpk, inColumnpk  }) => {
    return await Dal.DeleteWithCheck({ inDataPK, inReportName, inVoucherpk, inColumnpk  })
};
