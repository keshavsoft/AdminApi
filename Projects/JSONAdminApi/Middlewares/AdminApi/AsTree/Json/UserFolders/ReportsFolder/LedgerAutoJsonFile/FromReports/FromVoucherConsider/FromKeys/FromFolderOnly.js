
exports.PatchFuncs = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                ItemName: "",
                voucher: "",
                BodyAsJson: {}
            },
        });
        return;
    };

    if (("ItemName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ItemName not found in body" })
        return;
    };
    if (("voucher" in req.body) === false) {
        res.json({ KTF: false, KReason: "voucher not found in body" })
        return;
    };
    if (("BodyAsJson" in req.body) === false) {
        res.json({ KTF: false, KReason: "BodyAsJson not found in body" })
        return;
    };
    next();
};

exports.PostFuncs = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                ReportName: "",
                VoucherPk: "",
                BodyAsJson: {}
            },
        });
        return;
    };

    if (("ReportName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ReportName not found in body" })
        return;
    };
    if (("VoucherPk" in req.body) === false) {
        res.json({ KTF: false, KReason: "VoucherPk not found in body" })
        return;
    };
    if (("BodyAsJson" in req.body) === false) {
        res.json({ KTF: false, KReason: "BodyAsJson not found in body" })
        return;
    };
    if (("FolderName" in req.body.BodyAsJson) === false) {
        res.json({ KTF: false, KReason: "FolderName not found in body" })
        return;
    };
    if (("FromFolder" in req.body.BodyAsJson) === false) {
        res.json({ KTF: false, KReason: "FromFolder not found in body" })
        return;
    };
    next();
};
