/*
============================================
; Title:  Assignment 3-4
; Author: David Tays
; Date:   March 10 2018
; Modified By: <David Tays>
;
;===========================================*/

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");

var names = [
    "Bob",
    "Mike",
    "John",
    "Tom"
];

app.get("/", function(req, res){
    res.render("index", {
        namesList: names
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application is started on port %s!", 8080);
});