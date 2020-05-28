const fs = require('fs');

var a = 0;


var myReadStream = fs.createReadStream(__dirname + '/read.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/Write.txt');
myReadStream.pipe(myWriteStream);