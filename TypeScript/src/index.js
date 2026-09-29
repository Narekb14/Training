"use strict";
// Basic Types
let id = 67;
let company = 'Narek Media';
let isPublished = true;
let x = 'any type';
let ids = [1, 2, 3, 4, 5]; // arry type
// ids.push('Some string') //err because types that's not catch 
// Tuple
let person = [1, 'Narek', true];
// Tuple Arr
let employee;
employee = [
    [1, 'Narek'],
    [2, 'Vahe'],
    [3, 'Karen']
];
// Union
let pid = 22;
pid = "33";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // Output 0 , Direction1.Down -> output 1
const user1 = {
    id: 1,
    name: 'Narek'
};
// Type Assertion
let cid = 1;
// let customerId = <number> cid
let customerId = cid;
// Functions
function log(message) {
    console.log(message);
}
function addNum(x, y) {
    return x + y;
}
log(addNum(60, 7));
const user2 = {
    id: 2,
    name: 'Vahe'
};
const p1 = 1;
const p2 = "1";
// Classes
class Person {
    id; // You can make them private or protected
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const narek = new Person(1, "Narek");
console.log(narek);
console.log(narek.register());
