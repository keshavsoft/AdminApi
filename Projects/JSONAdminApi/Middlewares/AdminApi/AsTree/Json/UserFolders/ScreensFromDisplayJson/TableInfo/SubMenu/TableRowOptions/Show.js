exports.PatchFuncs = (req, res, next) => {
    
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    }
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                folderName: "",
                FileName: "",
                ItemName: "",
                ScreenName: "",
                BodyAsJson: {}   
            },
        })
    }
    if (("folderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "folderName not found in Request" })
        return;
    }
    if (("FileName" in req.body) === false) {
        res.json({ KTF: false, KReason: "FileName not found in Request" })
        return;
    }
    if (("ItemName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ItemName not found in Request" })
        return;
    }
    if (("ScreenName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ScreenName not found in Request" })
        return;
    }
    if (("BodyAsJson" in req.body) === false) {
        res.json({ KTF: false, KReason: "BodyAsJson not found in Request" })
        return;
    }
      
    next();
};