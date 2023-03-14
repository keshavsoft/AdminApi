let dal = require("../../../../../Dal/AdminApi/Reports/LedgerAutoJsonFile/Utilities/import");

exports.PostFunc = ({DataPK,ToName,ReportConficObject  }) => {
    dal.PostFunc({ DataPK,ToName,ReportConficObject });
};