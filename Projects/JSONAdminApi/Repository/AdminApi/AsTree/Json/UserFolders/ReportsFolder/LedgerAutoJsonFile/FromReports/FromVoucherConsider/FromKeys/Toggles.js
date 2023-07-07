let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/Toggles");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.Update({  DataPK,  ItemName, voucher, BodyAsJson })
};

exports.PostFunc = async ({ inDataPK,  inReportName, inVoucherPk, inActive }) => {
    return await Dal.PostFunc({ inDataPK,  inReportName, inVoucherPk, inActive })
};
