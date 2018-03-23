/*
============================================
; Title:  Assignment 5-2
; Author: David Tays
; Date:   March 18 2018
; Modified By: <David Tays>
; Description: EJS IF/ELSE statement
;===========================================*/

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");
//array of names
var names = [
    "Bob",
    "Mike",
    "John",
    "Tom"
];
//index file is rendered
app.get("/", function(req, res){
    res.render("index", {
        namesList: names
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application is started on port %s!", 8080);
});