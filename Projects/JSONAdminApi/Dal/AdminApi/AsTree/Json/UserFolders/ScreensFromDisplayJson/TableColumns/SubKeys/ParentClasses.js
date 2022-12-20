let CommonDataSupply = require("../../../../../../../../../../DataSupply");

exports.Update = async ({ inDataPk }) => {
    let LocalinDataPk = inDataPk;
    if (LocalinDataPk > 0) {
        return await CommonDataSupply.AsArray({ inDataPk });
    }
};