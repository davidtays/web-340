/*============================================
; Title:  Assignment 7-4
; Author: David Tays
; Date:   March 18 2018
; Modified By: <David Tays>
; Description: EJS User Interface Development
;===========================================*/

//require
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//Define employeeSchema
var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});
// Define the Employee model
var Employee = mongoose.model("Employee", employeeSchema);
//expose the employee to calling files
module.exports = Employee;
