/*
============================================
; Title:  Assignment 5-4
; Author: David Tays
; Date:   March 18 2018
; Modified By: <David Tays>
; Updated: March 26 2018, 4-4-18
; Description: EJS User Interface Development 
; w/ xss protection w/ csrf protection
;===========================================*/

var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

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
//setup for csrf protection
var csrfProtection = csrf({cookie: true});

// application
var app = express();

app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
//cross site scripting protection
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function(req, res, next){
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//app.set("port", process.env.PORT || 8080);



// Render the landing page
app.get("/", function(req,res){
    res.render("index", {
        title: "David's Home"        
    });
});
app.get("/new", function(req, res){
    res.render("new",{
        title: "New Employee",
        message: "XSS Prevention Example"
    });
});
app.post("/process", function(req, res){
    /*console.log(req.body.txtName);
    res.redirect("/");*/
    if((!req.body.txtFirstName) || (!req.body.txtLastName)){
        res.status(400).send("Entries must have a name");
        return;
    }
    //get request's form data
    var employeeFirstName = req.body.txtFirstName;
    var employeeLastName = req.body.txtLastName;
    console.log(employeeFirstName + " " + employeeLastName);
    //model
    var employee = new Employee({
        firstName: employeeFirstName,
        lastName: employeeLastName
    });
    
    //save
    employee.save(function(error){
        if(error) throw error;
        console.log(employeeFirstName + " " + employeeLastName + " saved successfully!");
    });
    res.redirect("/");
});
app.get("/list", function(req, res){
    //console.log(req.body.txtName);
    Employee.find({}, function(error, employees){
        if(error) throw error;

        res.render("list", {
            title: "Employee List",
            employees: employees
        });
    });    
});
app.get("view/:queryName", function(req, res){
    var queryName = req.params.queryName;

    Employee.find({'name': queryName}, function(error, employees){
        if(error) throw error;

        console.log(employees);

        if(employees.length > 0){
            res.render("view", {
                title: "Employee Record",
                employee: employees
            });
        }
        else {
            res.redirect("/list");
        }
    });
});
app.use("/style",express.static(__dirname + "/style"));

http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});