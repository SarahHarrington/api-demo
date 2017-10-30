var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.listen(port, function(req, res){
    console.log('listneing on port', port);
})