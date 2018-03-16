/*
============================================
; Title:  Assignment 4-3
; Author: David Tays
; Date:   March 13 2018
; Modified By: <David Tays>
;
;===========================================*/
var express = require('express');
var http =  require('http');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

// requests using status codes
app.get('/not-found', function(req, res){
    res.status(404);

    res.json({
        error: 'Resource not found'
    });
});

app.get('/ok', function(req, res){
    res.status(200);

    res.json({
        error: 'Page loaded correctly'
    });
});

app.get('/not-implemented', function(req, res){
    res.status(501);

    res.json({
        error: 'Page not implemented'
    });
});

http.createServer(app).listen(3000, function(){
    console.log('Applications started on port %s', 3000);
});