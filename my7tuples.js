// const user: (string | number)[] = [1, "ak"]
var tUser;
// tUser = [true, 1223, "fg"] // not allowed - order matters in tuples
tUser = ["ak", 121, true]; // allowed
var rgb = [255, 123, 112]; // allowed
var newUser = [112, "ak@gmail.com"];
newUser[1] = "akbhai@gmail"; // allowed - u can override
