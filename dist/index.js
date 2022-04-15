"use strict";
// Basic Types
let Name = 'Tausif Khan'; // Here if we stored number or boolean or any type it throws error,
// because we have given the type string to variable 'Name'
let Rollno = 29;
let isPresent = true;
let Age;
Age = 22;
let x = 'string'; // Here we have store a string value to 'x' variable, we can store anything boolean, number, etc. 
x = 12; // Here we have store a number value to 'x'
// Array
let person = [1, 2, 3, 4, 5];
// person.push("Rehan")  // we cannot push string to number array
let arr = [1, 'Faizan', true];
// Tuple - Tuple can contain two or more values of different data types.
let data = [29, 'Tausif Khan', true];
// console.log(data[0])
// Tuple Array 
let fruits;
fruits = [
    [10, 'mango'],
    [20, 'apple'],
    [30, 'grapes']
];
console.log(fruits);
// Union - a particular variable to be able to hold more than one type
let pId = 2;
pId = 'hello';
console.log(pId);
// Enum - Enums allow a developer to define a set of named constants.
var Direction1;
(function (Direction1) {
    // In other words, Direction.top has the value 5, bottom has 6, left has 7, and right has 8.
    Direction1[Direction1["top"] = 5] = "top";
    Direction1[Direction1["bottom"] = 6] = "bottom";
    Direction1[Direction1["left"] = 7] = "left";
    Direction1[Direction1["right"] = 8] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.right);
var Direction2;
(function (Direction2) {
    Direction2["top"] = "john";
    Direction2["bottom"] = "doe";
    Direction2["left"] = "lily";
    Direction2["right"] = "zayn";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.top);
