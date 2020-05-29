const express = require('express');
const app = express();

// Adding Question mark makes passing params as optional
// app.get('/users/:id/:name?',(req,res) => {

app.get('/users/:id?/:name?',(req,res) => {
    console.log(req.params);
    res.send(`Requested ID is <b> ${req.params.id} </b> and Name is : <b> ${req.params.name} </b>`);
});

app.get('/flights/:from-:to',(req,res) => {
    console.log(req.params);
    res.send(`Flights requested from <b> ${req.params.from} </b> to <b> ${req.params.to} </b>`);
});

app.listen(3000, () => console.log('Server Up and Running'));