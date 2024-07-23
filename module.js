exports.parseRequest = function(req,callback){
    var rawData = []
    switch(req.headers['Content-Type']){
        case "application/json":
            req.on('data',(a)=>{
                rawData.push(a)
            })
            req.on("end",()=>{
           var data = Buffer.concat(rawData).toString()
           var jsonData = JSON.parse(data)
           callback(jsonData)
            })
        break;
    }

}