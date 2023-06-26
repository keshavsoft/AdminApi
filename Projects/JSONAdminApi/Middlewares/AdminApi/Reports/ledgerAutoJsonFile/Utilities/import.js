
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
                ToName: "",
                ReportConfigObject: ""
            },
        });
        return;
    };

    if (("ToName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ToName not found in body" })
        return;
    };
    if (("ReportConfigObject" in req.body) === false) {
        res.json({ KTF: false, KReason: "ReportConfigObject not found in body" })
        return;
    };
    next();
};

