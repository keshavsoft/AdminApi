let Dal = require("../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromKeys/FromFolder");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.Update = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.Update({  DataPK,  ItemName, voucher, BodyAsJson })
};
