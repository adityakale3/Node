const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=> {

fs.readFile(__dirname+"/../fileSystem/hello.txt","utf8", (error,data) => {
    if(error) throw error;
    res.writeHead(200,{"content-type":"text/plain"});
    res.write(data);
    res.end();
});

}).listen(3000,() => console.log("Server Running at port 3000"));