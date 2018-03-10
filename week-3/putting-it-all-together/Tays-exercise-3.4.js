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

var logger = require("morgan");

var app = express();

// register views folder and views engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//configure logger
app.use(logger("dev"));

//request a page(listens for '/' and goes to index) respond with message
app.get("/", function(req, res){
    res.render("index", {
        message: "home page"
    });
});
//request about page
app.get("/about", function(req, res){
    res.render("about", {
        message: "about page" 
    });
});
//request contact page
app.get("/contact", function(req, res){
    res.render("contact", {
        message: "contact page"
    });
});
//request products page
app.get("/products", function(req, res){
    res.render("products", {
        message: "products page"
    });
});
//the http obect will create a server and listen on a port
http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});
