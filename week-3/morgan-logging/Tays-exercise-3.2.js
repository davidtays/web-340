/*
============================================
; Title:  Assignment 3-2
; Author: David Tays
; Date:   7 March 2018
; Modified By: <David Tays>
;
;===========================================*/

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); //Tell Express to use the EJS view engine

app.use(logger("dev"));

app.get("/", function(req, res){
    res.render("index", {
        message:"Welcome to the Morgan Logger Example Presented By David Tays!"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});

