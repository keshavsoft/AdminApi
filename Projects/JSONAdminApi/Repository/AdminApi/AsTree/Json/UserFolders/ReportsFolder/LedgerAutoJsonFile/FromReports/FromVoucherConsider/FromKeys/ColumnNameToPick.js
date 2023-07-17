let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ColumnNameToPick");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.Update({  DataPK,  ItemName, voucher, BodyAsJson })
};

exports.PostFunc = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.PostFunc({  DataPK,  ItemName, voucher, BodyAsJson })
};
