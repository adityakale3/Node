const express = require('express');
const app = express();

//b can be optional
app.get('/ab?cd?',(req,res) => {
    //console.log(req.params);
    res.send('hey How u doin ?');
});


// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
});

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
});

//This route path will match /abe and /abcde.
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
});

// Examples of route paths based on regular expressions:
// This route path will match anything with an “a” in it.
app.get(/a/, function (req, res) {
  res.send('/a/')
});

//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
});




app.listen(3000, () => console.log('Server Up and Running'));