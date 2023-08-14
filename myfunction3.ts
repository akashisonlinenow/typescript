function addTwo(num: number) {
    // num.toUpperCase() // not allowed // by this it converts it to string
    return num+2;
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string,email: string,isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
// default value of isPaid is false


function temp(num: number): number {
    // num.toUpperCase() // not allowed // by this it converts it to string
    // return "hello"; // not allowed
    return num+1; // returns number
}

// addTwo("5")   // not allowed when number is added in function
addTwo(5)

// getUpper(4) // not allowed
getUpper("akash")

// signUpUser(1,2,3) //  not allowed
signUpUser("akash","aksh@gmail",false)

loginUser("a","a@a")

// function where more than one diff type var can be returned
// function getValue(myVal: number): boolean{
//     if(myVal>5) return true;

//     return "200 OK"
// }

// arrow func where return type is mentioned
const getHello = (s: string): string => {
    return ""
}

const heros = ["thor","spiderman", "ironman"]
// const heros = [1,2,3]
// in map method value of hero is not required describe explicitly
heros.map(hero => {
    return `hero is ${hero}`
})

const heroo = [1,2,3]
heroo.map((hero): number => {
    // return `hero is ${hero}`  // not allowed // return only number is allowed
    return 1  // allowed
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    // return 1; // not allowed
}

// some func never returns a value-- read it from 'more on functions' from docs 
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    // return ""   // not allowed
}



export {}