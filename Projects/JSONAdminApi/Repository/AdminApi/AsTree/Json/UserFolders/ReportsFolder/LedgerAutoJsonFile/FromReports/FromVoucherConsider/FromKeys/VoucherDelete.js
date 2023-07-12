let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/Toggles");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({inDataPK });
};

exports.Delete = async ({ inDataPK, inReportName, inVoucherPk}) => {
    return await Dal.Delete({  inDataPK, inReportName, inVoucherPk })
};

exports.PostFunc = async ({ inDataPK, inReportName, inVoucherPk }) => {
    return await Dal.PostFunc({ inDataPK, inReportName, inVoucherPk })
};
