let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/Columns");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({ DataPK,  ReportName, CloneName }) => {
    return await Dal.Clone({ DataPK,  ReportName, CloneName })
};
