let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/DisplayColumn");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK,  ReportName, voucherconsiderpk,columnpk,BodyAsJson }) => {
    return await Dal.Update({ DataPK,  ReportName, voucherconsiderpk,columnpk,BodyAsJson })
};
