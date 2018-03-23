/*
============================================
; Title:  Assignment 5-4
; Author: David Tays
; Date:   March 18 2018
; Modified By: <David Tays>
; Description: EJS User Interface Development
;===========================================*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function(req,res){
    res.render("index", {
        title: "David's Home"
    });
});
app.use("/style",express.static(__dirname + "/style"));

http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});