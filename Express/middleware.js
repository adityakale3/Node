const express = require('express');
const app = express();

var Verification = (req,res,next) => {
    console.log('User : ', req.params.username);
    if(req.params.username == "Aditya"){
        console.log('Access Granted');
        // res.send("Access Granted");
    }else{
        console.log('Access Denied');
       // res.send("Access Denied");
    }
    next();
}

// Multiple Middle ware can be used globally in order
// Defining here makes it ussable for all routes
// app.use(Verification);

app.get('/',(req,res) => {
    res.send('How u doin All');
});

app.get('/users/:username',Verification,(req,res) => {
    res.send('How u doin Users');
});

app.listen(3000, () => console.log('Server Up and Running'));