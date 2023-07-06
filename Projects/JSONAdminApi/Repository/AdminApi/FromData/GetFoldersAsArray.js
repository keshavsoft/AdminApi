let Dal = require("../../../Dal/AdminApi/FromData/GetFoldersAsArray");

exports.GetFunc = async ({ DataPK }) => {
    return await Dal.GetFunc({ DataPK });
};


