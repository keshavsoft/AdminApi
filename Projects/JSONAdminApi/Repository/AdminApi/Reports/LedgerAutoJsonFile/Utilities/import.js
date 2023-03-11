let dal = require("../../../../../Dal/AdminApi/Reports/LedgerAutoJsonFile/Utilities/import");

exports.PostFunc = ({DataPk,ToName,ReportConficObject  }) => {
    dal.PostFunc({ DataPk,ToName,ReportConficObject });
};