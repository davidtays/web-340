/*
============================================
; Title:  Assignment 4-2
; Author: David Tays
; Date:   March 13 2018
; Modified By: <David Tays>
;
;===========================================*/
var express = require("express");

var http = require("http");
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
//get the customer id and respond with the customer values
app.get("/customer/:id", function(req,res){
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: "Leo",
        lastName: "Tolstoy",
        employeeId: id
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});