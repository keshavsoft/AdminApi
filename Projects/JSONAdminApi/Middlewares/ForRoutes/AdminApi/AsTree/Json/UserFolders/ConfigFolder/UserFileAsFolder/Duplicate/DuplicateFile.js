exports.patchFunc = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                folderName: "",
                inToFileName: "",
                inFileNameOnly: ""
            }
        });

        return;
    };

    if (("KeshavSoft" in req) === false) {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })
        return;
    };
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })
        return;
    };
    if (("folderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "folderName not found in body" })
        return;
    };
    if (("inToFileName" in req.body) === false) {
        res.json({ KTF: false, KReason: "inToFileName not found in body" })
        return;
    };
    if (("inFileNameOnly" in req.body) === false) {
        res.json({ KTF: false, KReason: "inFileNameOnly not found in body" })
        return;
    };

    next();
};

exports.patchFunc1 = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                folderName: ""
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })

        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

            } else {
                if (("folderName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "folderName not found in body" })

                } else {
                    if (("inToFolderName" in req.body) === false) {
                        res.json({ KTF: false, KReason: "inToFolderName not found in body" })

                    } else {
                        next();
                    };
                };
            };
        };
    };
};
