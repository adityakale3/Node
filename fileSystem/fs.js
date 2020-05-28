const fs = require('fs');
// Async
fs.readFile(__dirname+"/hello.txt","utf8", (error,data) => {
    if(error){
        console.log("Error : ",error);
    }else{
        console.log(data);
    }
});

// //Delete File
// fs.unlink(__dirname+"/hello.txt", (error,data) => {
//     if(error){
//         throw error;
//     }else{
//         console.log("File Deleted ");
//     }  
// });


