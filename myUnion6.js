var score = 33; // union ( | ) allows to assign a value of any type which is declared with union 
score = 44; // allowed
score = '55'; // allowed // its string then also its crct bcos both string and number value is accepted
var akash = { name: "aksh", id: 62 }; // allowed
akash = { username: "ak", id: 62 }; // alowed
// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3"); // alowed 
// function getDbId(id: number | string){
//     id.toLowerCase() // not allowed bcos toLowercase dont exist in both string and number
// } 
function getDbId(id) {
    if (typeof id === 'string') { // allowed  // this a.k.a union narrowing
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
// const data1: string[] | number[] = ['1','2',3] // not allowed
// it can be either all numbers or all strings
var data1 = ['1', '2', '3']; // alowed
var data2 = [1, 2, 3]; // allowed
// to allow both types in array
var data3 = ['1', 2, '3', true]; //allowed
var data4 = ['1', 2, '3', true]; // it works with this but its not preferred to write good code
var pi = 3.14; // strictly assigning values
// pi = 3.145  // not allowed
