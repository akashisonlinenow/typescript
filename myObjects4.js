"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "akash",
    email: "ak@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "akash", isPaid: false }); // it must contain all objects which was passed earlier while declaration
// createUser({name: "akash", isPaid: false, email: "ak@gmail.com"})  // not allowed
var newUser = { name: "akash", isPaid: false, email: "ak@gmail.com" };
createUser(newUser); //allowed
function createCourse() {
    return { name: "reactjs", price: 399 };
}
