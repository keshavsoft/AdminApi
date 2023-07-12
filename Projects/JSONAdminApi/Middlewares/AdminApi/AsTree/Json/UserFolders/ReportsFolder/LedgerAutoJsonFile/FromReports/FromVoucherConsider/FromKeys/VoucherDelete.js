
exports.DeleteFuncs = (req, res, next) => {
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
                VoucherPk:""          
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
    next();
};

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
                ReportName: "",
                VoucherPk:""          
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
    next();
};
