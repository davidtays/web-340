/*
============================================
; Title:  Assignment 4-4
; Author: David Tays
; Date:   March 13 2018
; Modified By: <David Tays>
;
;===========================================*/
var express = require("express");

var http = require("http");



var app = express();


//different request types
app.get("/", function(request, response) {

    response.send("API invoked as an HTTP GET request.");

});



app.put("/", function(request, response) {

    response.send("API invoked as an HTTP PUT request.");

});



app.post("/", function(request, response) {

    response.send("API invoked as an HTTP POST request");

});



app.delete("/", function(request, response) {

    response.send("API invoked as an HTTP DELETE request");

});



http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});