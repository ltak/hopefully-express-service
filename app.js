/*
Module Dependencies
*/

const express = require('express');
const app = express()

let users = { }
app.listen(4000, function(){
    console.log("Server started on port 4000")
})

app.get('/hello', function(req, res){
    res.send('Hello there');
});

app.get('/jason', function(req, res){
    res.send('Jason is not a real cool guy');
});

app.get('/mika', function(req, res){
    res.send('Mika is a mean girl');
});

app.get('/lucas', function(req, res){
    res.send('Lucas is a real cool guy');
});

app.post('/hello', function(req, res){
    console.log(req.param('id'));
    res.send(req.params);
})