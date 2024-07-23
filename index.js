const http = require("http")
const mysql = require("mysql")


const corn = mysql.createConnection({
 "host":"localhost",
 "user":"root",
 "password":"",
 "database":"blog"   
});

corn.connect()

const server = http.createServer((req,res)=>{
     res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
    if(req.method == "POST"){
        if(req.url == "/search"){
            var rawData = []
            req.on('data',(a)=>{
                rawData.push(a)
            })
            req.on("end",()=>{
           var data = Buffer.concat(rawData).toString()
           var jsonData = JSON.parse(data)
           res.statusCode = 200
           corn.query("SELECT * FROM `blog` WHERE title LIKE '%"+jsonData.value+"%' ",(err,data)=>{
           if(err) throw err;
           res.write(JSON.stringify(data))
           res.end()
           })
          
           
            })
           
        }
    }

});

server.listen(3030,'127.0.0.1',()=>{
    console.log("started")
})