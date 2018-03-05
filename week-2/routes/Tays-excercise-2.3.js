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

//routes
app.get("/", function(req, res){
    res.end("Welcome to the homepage!\n");
});

app.get("/about", function(req, res){
    res.end("Welcome to the about page!\n");
});

app.get("/contact", function(req, res){
    res.end("Welcome to the contact page!\n");
});

//route interceptor - handles any routes not declared^^
app.use(function(req, res){
    res.statusCode = 404;
    res.end("404!\n");
});

//create server and listen on port 3000
http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
});