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

// addTwo("5")   // not allowed when number is added in function
addTwo(5)

// getUpper(4) // not allowed
getUpper("akash")

// signUpUser(1,2,3) //  not allowed
signUpUser("akash","aksh@gmail",false)

loginUser("a","a@a")

export {}