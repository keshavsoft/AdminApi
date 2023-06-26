let CommonDatasupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/AsTree/FromKeys/Toggles");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ReportsFolder/LedgerAutoJsonFile/FromKey/InsertKey");

let GetFuncs = async ({ inDataPK }) => {
    let LocalinDataPK = inDataPK;

    if (LocalinDataPK > 0) {
        return await CommonDatasupply.StartFunc({ inDataPK });
    };
};

let postFuncs = async ({ inDataPK, inNewReportName }) => {
    let LocalinDataPK = inDataPK;
    let LocalinNewReportName = inNewReportName;

    if (LocalinDataPK > 0) {
        return await CommonDataSupplyForUpdate.StartFunc({
            DataPK: LocalinDataPK,
            NewReportName: LocalinNewReportName
        })
    };
};

module.exports = {
    GetFuncs, postFuncs
};
