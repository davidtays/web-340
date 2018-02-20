var header = require('../header.js');
/*
============================================
; Title:  Assignment 1-3
; Author: David Tays
; Date:   28 January 2018
; Modified By: <David Tays>
;
;===========================================*/
var url = require("url");
var parsedURL = url.parse("https://davidtays.github.io/WebPortfolio/profile?name=tays");

//Header
console.log('\n'); 
console.log(header.display("David", "Tays", "Excercise 1.3") + "\n");


//output
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);