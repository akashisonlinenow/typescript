"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() // not allowed // by this it converts it to string
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// default value of isPaid is false
// addTwo("5")   // not allowed when number is added in function
addTwo(5);
// getUpper(4) // not allowed
getUpper("akash");
// signUpUser(1,2,3) //  not allowed
signUpUser("akash", "aksh@gmail", false);
loginUser("a", "a@a");
