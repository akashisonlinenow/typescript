const User = {
    name: "akash",
    email: "ak@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "akash", isPaid: false}) // it must contain all objects which was passed earlier while declaration

// createUser({name: "akash", isPaid: false, email: "ak@gmail.com"})  // not allowed
let newUser = {name: "akash", isPaid: false, email: "ak@gmail.com"}
createUser(newUser)  //allowed

function createCourse() : {name: string, price: number}{  // (object) : {return type}{ declaration }
    return {name: "reactjs", price: 399}
}

export {}