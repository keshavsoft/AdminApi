let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.Update({  DataPK,  ItemName, voucher, BodyAsJson })
};

exports.Post = async ({ inDataPK,  inVoucherPk, invoucher, inFolderName, inFileName,inItemName,inItemNameConsider }) => {
    return await Dal.Post({  inDataPK,  inVoucherPk, invoucher, inFolderName,inFileName,inItemName, inItemNameConsider})
};
