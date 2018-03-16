/*
============================================
; Title:  Assignment 3-3
; Author: David Tays
; Date:   March 10 2018
; Modified By: <David Tays>
;
;===========================================*/

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("dev"));
//query for employeeId and provide a callback that parses the integer
app.get("/:employeeId", function(req, res){
    var employeeId = parseInt(req.params.employeeId, 10);
    res.render("index", {
        employeeId: employeeId
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});