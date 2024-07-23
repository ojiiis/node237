const pa = require("./module")
const http = require("http")

const serve = http.createServer((req,res)=>{
    pa.parseRequest(req,function(data){
        console.log(data)
    })
})

serve.listen(4040)