let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumnDelete");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.Delete = async ({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson }) => {
    return await Dal.Delete({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson  })
};

exports.DeleteWithCheck = async ({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson  }) => {
    return await Dal.DeleteWithCheck({ inDataPk,  inReportname, inVoucherpk,inColumnpk,inBodyAsJson  })
};
