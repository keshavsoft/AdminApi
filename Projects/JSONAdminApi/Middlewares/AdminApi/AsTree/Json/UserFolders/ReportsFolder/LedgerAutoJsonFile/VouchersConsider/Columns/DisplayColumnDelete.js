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
                Reportname: "",
                Voucherpk:"", 
                Columnpk:"",
                BodyAsJson:{}    
            },
        })
    }
    if (("Reportname" in req.body) === false) {
        res.json({ KTF: false, KReason: "Reportname not found in Request" })
        return;
    }
    if (("Voucherpk" in req.body) === false) {
        res.json({ KTF: false, KReason: "Voucherpk not found in Request" })
        return;
    }
    if (("Columnpk" in req.body) === false) {
        res.json({ KTF: false, KReason: "Columnpk not found in Request" })
        return;
    }
    if (("BodyAsJson" in req.body) === false) {
        res.json({ KTF: false, KReason: "BodyAsJson not found in Request" })
        return;
    }
      
    next();
};

exports.PostFuncs = (req, res, next) => {
    
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    }
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                Reportname: "",
                Voucherpk:"", 
                Columnpk:"",
                BodyAsJson:{}    
            },
        })
    }
    if (("Reportname" in req.body) === false) {
        res.json({ KTF: false, KReason: "Reportname not found in Request" })
        return;
    }
    if (("Voucherpk" in req.body) === false) {
        res.json({ KTF: false, KReason: "Voucherpk not found in Request" })
        return;
    }
    if (("Columnpk" in req.body) === false) {
        res.json({ KTF: false, KReason: "Columnpk not found in Request" })
        return;
    }
    if (("BodyAsJson" in req.body) === false) {
        res.json({ KTF: false, KReason: "BodyAsJson not found in Request" })
        return;
    }
      
    next();
};