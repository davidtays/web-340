var header = require('../header.js');
/*
============================================
; Title:  Assignment 1-5
; Author: David Tays
; Date:   19 Februeary 2018
; Modified By: <David Tays>
;
;===========================================*/

//Variable declaration:
var http = require("http");
function processRequest(req, res) {
var body = "Hello BEAUTIFUL World";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);