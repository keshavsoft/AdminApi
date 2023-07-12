let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/VoucherDelete");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({inDataPK });
};

exports.DeleteFunc = async ({ inDataPK, inReportName, inVoucherPk}) => {
    return await Dal.DeleteFunc({  inDataPK, inReportName, inVoucherPk })
};

exports.PostFunc = async ({ inDataPK, inReportName, inVoucherPk }) => {
    return await Dal.PostFunc({ inDataPK, inReportName, inVoucherPk })
};
