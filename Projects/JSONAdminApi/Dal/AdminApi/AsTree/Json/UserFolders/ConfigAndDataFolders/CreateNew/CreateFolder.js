let CommonDatasupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableColumns/Duplicate/DuplicateFolder");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDatasupply.AsObject({ inDataPK: DataPK });
    };
};

module.exports = {
    GetFuncs, Clone
};

