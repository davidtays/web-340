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
