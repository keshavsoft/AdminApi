let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ inDataPK,  inVoucherPk, inReportName, inFolderName, inFileName,inItemName,inItemNameConsider }) => {
    return await Dal.Update({  inDataPK,  inVoucherPk, inReportName, inFolderName, inFileName,inItemName,inItemNameConsider })
};

exports.PostFuncs = async ({ inDataPK,  inVoucherPk, inReportName, inFolderName, inFileName,inItemName,inItemNameConsider }) => {
    return await Dal.PostFuncs({  inDataPK,  inVoucherPk, inReportName, inFolderName,inFileName,inItemName, inItemNameConsider})
};
