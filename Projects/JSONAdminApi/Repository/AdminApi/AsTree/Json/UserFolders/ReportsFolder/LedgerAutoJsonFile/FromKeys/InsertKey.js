let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromKeys/InsertKey");

exports.GetFuncs = async ({ inDataPK }) => {
    return await Dal.GetFuncs({ inDataPK });
};

exports.postFuncs = async ({ inDataPK,  inNewReportName }) => {
    return await Dal.postFuncs({  inDataPK,  inNewReportName })
};
