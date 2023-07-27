let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromTableColumns/SubKeys/Widths");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ inDataPK, inReportName, inDataAttribute, BodyAsJson  }) => {
    return await Dal.Update({ inDataPK, inReportName, inDataAttribute, BodyAsJson })
};
