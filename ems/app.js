/*
============================================
; Title:  Assignment 5-4
; Author: David Tays
; Date:   March 18 2018
; Modified By: <David Tays>
; Updated: March 26 2018
; Description: EJS User Interface Development
;===========================================*/

var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var Employee = require("./models/employee");
// mLab connection
var mongoDB = "mongodb://ems_user:mypuddin22@ds117749.mlab.com:17749/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console,"MongoDB connection error:"));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});


// application
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
//model
var employee = new Employee({
    firstName: "Apple",
    lastName: "Dumpling"
});

// Render the landing page
app.get("/", function(req,res){
    res.render("index", {
        title: "David's Home"
    });
});
app.use("/style",express.static(__dirname + "/style"));

http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});