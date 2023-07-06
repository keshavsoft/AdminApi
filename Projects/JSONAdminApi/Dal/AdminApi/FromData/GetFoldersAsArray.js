let CommonDatasupply = require("../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/GetDirectoriesGroup/foldersAsArray");

let GetFunc = ({ inDataPK }) => {
    if (inDataPK > 0) {
        return CommonDatasupply.StartFunc({ inDataPK: inDataPK });
    };
};



module.exports = {
    GetFunc
};
