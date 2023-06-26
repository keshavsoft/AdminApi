let dal = require("../../../../../Dal/AdminApi/Reports/LedgerAutoJsonFile/Utilities/import");

exports.PostFunc = async ({ DataPK, ToName, ReportConfigObject }) => {
    return await dal.PostFunc({ DataPK, ToName, ReportConfigObject });
};