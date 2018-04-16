/*
============================================
; Title:  Assignment 7-3
; Author: David Tays
; Date:   April 4 2018
; Modified By: <David Tays>
;Description: Mocha-Chai
;===========================================*/


var flies = require("../Tays-exercise-7.3.js");

var chai = require("chai");

var assert = chai.assert;

describe("flies", function(){
    it("should return an array of flies", function(){
        var f = flies("Fruit,Dragon,Pop");
        assert(Array.isArray(f));
    });
});

