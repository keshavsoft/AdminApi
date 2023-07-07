let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.Update({  DataPK,  ItemName, voucher, BodyAsJson })
};

exports.PostFuncs = async ({ inDataPK,  inVoucherPk, inReportName, inFolderName, inFileName,inItemName,inItemNameConsider }) => {
    return await Dal.PostFuncs({  inDataPK,  inVoucherPk, inReportName, inFolderName,inFileName,inItemName, inItemNameConsider})
};
