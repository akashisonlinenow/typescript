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
function temp(num) {
    // num.toUpperCase() // not allowed // by this it converts it to string
    // return "hello"; // not allowed
    return num + 1; // returns number
}
// addTwo("5")   // not allowed when number is added in function
addTwo(5);
// getUpper(4) // not allowed
getUpper("akash");
// signUpUser(1,2,3) //  not allowed
signUpUser("akash", "aksh@gmail", false);
loginUser("a", "a@a");
// function where more than one diff type var can be returned
// function getValue(myVal: number): boolean{
//     if(myVal>5) return true;
//     return "200 OK"
// }
// arrow func where return type is mentioned
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
// in map method value of hero is not required describe explicitly
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
var heroo = [1, 2, 3];
heroo.map(function (hero) {
    // return `hero is ${hero}`  // not allowed // return only number is allowed
    return 1; // allowed
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1; // not allowed
}
// some func never returns a value-- read it from 'more on functions' from docs 
function handleError(errmsg) {
    throw new Error(errmsg);
    // return ""   // not allowed
}
