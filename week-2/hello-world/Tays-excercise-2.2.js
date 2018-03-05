/*
============================================
; Title:  Assignment 2-2
; Author: David Tays
; Date:   February 26 2018
; Modified By: <David Tays>
;
;===========================================*/

//require library
var express = require('express');
var http = require('http');

//placeholder for express
var app = express();

app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n'); //returns value to app or client that attemps to access our url
});

//listens on port 8080
http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});