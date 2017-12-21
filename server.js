var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/upload',function(req,res){
    res.send(req.files);
})

app.listen(9999,function(){
    console.log('APP Runing port 9999');
})