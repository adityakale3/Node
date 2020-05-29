const express = require('express');
const app = express();

app.use(express.static('public'));
// Can be used to set virtual path.
// add in html css and images and js files '/static/path/to/file.extension'
// app.use('/static', express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Server Up and Running'));