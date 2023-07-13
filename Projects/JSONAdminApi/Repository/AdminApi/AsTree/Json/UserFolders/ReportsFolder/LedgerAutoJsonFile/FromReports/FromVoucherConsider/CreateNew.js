let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/CreateNew");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.CreateNewFunc = async ({ inDataPK, inReportName, inFolderName, inFileName, inItemName }) => {
    return await Dal.CreateNewFunc({ inDataPK, inReportName, inFolderName, inFileName, inItemName })
};
