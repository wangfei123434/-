let http = require("http")
let url = require("url")
let fs = require("fs")
http.createServer((req,res)=>{
	if(req.url === "/favicon.ico"){
		return
	}
	res.writeHeader(200,{
		"Content-Type":"text/html;charset=UTF-8",
		"Access-Control-Allow-Origin":"*"
	})
	console.log(req.url)
	if(req.url === "/play/new"){
		fs.readFile("./json/play-new.json",(err,data)=>{
			if(err){
				return res.end("404 Not Found")
			}else{
				res.end(data)
			}
		})
	}else{
		res.end("404 Not Found")
	}
	
}).listen(8181)