let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/VouchersConsider/Columns/Duplicate");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Clone = async ({ DataPK,  ReportName, VoucherConsiderPK, ColumnPk }) => {
    return await Dal.Clone({  DataPK,  ReportName, VoucherConsiderPK, ColumnPk })
};
