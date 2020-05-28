const fs = require('fs');

// // Async
// fs.readFile(__dirname + "/hello.txt","utf8", (error,data) => {
//     if(error) throw error;
//     console.log(data);
// });

// Sync
try {
    const data = fs.readFileSync(__dirname + "/hello.txt","utf-8");
    console.log(data);
} catch (error) {
    console.log("Error",error);    
}

