/*
============================================
; Title:  Assignment 5-3
; Author: David Tays
; Date:   March 18 2018
; Modified By: <David Tays>
;
;===========================================*/

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function(req,res){
    res.render("index", {
        message: "Welcome to the Pug based homepage created by David Tays!"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});