var mongoose = require("mongoose");
var mongoDB = "mongodb://ems_user:mypuddin22@ds117749.mlab.com:17749/ems";

mongoose.connect(mongoDB
);

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});