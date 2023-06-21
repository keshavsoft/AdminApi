exports.PatchFuncs = (req, res, next) => {
    console.log("middleware--------------");
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };
    if (("folderName" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "folderName not found in Request" })
        return;
    };
    if (("FileName" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "FileName not found in Request" })
        return;
    };
    if (("ItemName" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "ItemName not found in Request" })
        return;
    };
    if (("ScreenName" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "ScreenName not found in Request" })
        return;
    };
    if (("GridName" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "GridName not found in Request" })
        return;
    };
    if (("BodyAsJson" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "BodyAsJson not found in Request" })
        return;
    };
      
    next();
};