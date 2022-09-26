//let CommonData = require("../../../../../CommonData/Utility/Json/Columns/Insert");
let CommonData = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/TableColumns/Insert/Start");

//let GlobalUserNameToPK = require("../../../../../CommonData/Users/NameToPK");

let Insert = ({ inJsonConfig, inItemConfig, inColumnName, inUserName }) => {
    return new Promise((resolve, reject) => {
        //let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
        if (inDataPk > 0) {

            CommonData.Insert({ inJsonConfig, inItemConfig, inColumnName, inUserPK: inDataPk }).then(resolve).catch(reject);
        };
    });
};

module.exports = { Insert };
