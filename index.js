var http = require('http');
var url = require('url');
var date = require('./js/DateTime.js');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.name;
    res.write(date.DateTime());
    res.end(txt);
    console.log("Success");
}).listen(8080);