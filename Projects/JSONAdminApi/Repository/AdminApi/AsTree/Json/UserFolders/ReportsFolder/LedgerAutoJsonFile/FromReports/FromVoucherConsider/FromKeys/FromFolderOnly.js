let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.PostFuncs = async ({ inDataPK,  inReportName, inVoucherPk, inFolderName, inFromFolder }) => {
    return await Dal.PostFuncs({ inDataPK,  inReportName, inVoucherPk, inFolderName, inFromFolder })
};

exports.Update = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.Update({  DataPK,  ItemName, voucher, BodyAsJson })
};
