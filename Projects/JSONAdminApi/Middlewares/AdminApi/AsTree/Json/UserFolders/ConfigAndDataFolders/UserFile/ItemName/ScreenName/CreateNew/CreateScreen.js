
    exports.PostFunc = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: "",
                NewFileName: "",
                NewItemName:"",
                NewScreenName:""
            },
        });
        return;
    };
    if (("FolderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "FolderName not found in body" })
        return;
    };
    if (("NewFileName" in req.body) === false) {
        res.json({ KTF: false, KReason: " NewFileName not found in body" })
        return;
    };
    if (("NewItemName" in req.body) === false) {
        res.json({ KTF: false, KReason: " NewItemName not found in body" })
        return;
    };
    if (("NewScreenName" in req.body) === false) {
        res.json({ KTF: false, KReason: " NewScreenName not found in body" })
        return;
    };

    next();
};