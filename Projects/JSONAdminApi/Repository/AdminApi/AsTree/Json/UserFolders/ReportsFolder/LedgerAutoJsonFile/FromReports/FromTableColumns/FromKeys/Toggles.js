let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromTableColumns/FromKeys/Toggles");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ inDataPK, inReportName, inTableColumnsPk, BodyAsJson  }) => {
    return await Dal.Update({ inDataPK, inReportName, inTableColumnsPk, BodyAsJson })
};
