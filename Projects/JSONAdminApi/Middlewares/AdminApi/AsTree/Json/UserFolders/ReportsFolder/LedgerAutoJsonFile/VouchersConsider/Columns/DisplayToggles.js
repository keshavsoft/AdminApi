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
                reportname: "", 
                voucherconsiderpk:"", 
                columnpk:"",
                BodyAsJson:{}    
            },
        })
    }
    if (("reportname" in req.body) === false) {
        res.json({ KTF: false, KReason: "reportname not found in Request" })
        return;
    }
    if (("voucherconsiderpk" in req.body) === false) {
        res.json({ KTF: false, KReason: "voucherconsiderpk not found in Request" })
        return;
    }
    if (("columnpk" in req.body) === false) {
        res.json({ KTF: false, KReason: "columnpk not found in Request" })
        return;
    }
    if (("BodyAsJson" in req.body) === false) {
        res.json({ KTF: false, KReason: "BodyAsJson not found in Request" })
        return;
    }
      
    next();
};