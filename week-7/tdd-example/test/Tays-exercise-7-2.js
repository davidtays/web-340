/*
============================================
; Title:  Assignment 7-2
; Author: David Tays
; Date:   April 4 2018
; Modified By: <David Tays>
;Description: TDD in Action
;===========================================*/


var assert = require("assert");//Use chai's assert

//Describes specs
describe("String#split", function(){
    //test title and test function
    it("should return an array of animals", function(){
        assert(Array.isArray('Alligator, Bear, Crocodile, Dingo'.split(',')));
    });
});

//passed function
function getAnimals(str){
    return str.split(',');
}
module.exports = getAnimals;

//run the test using 'npm test' in the console from the tdd-example directory



