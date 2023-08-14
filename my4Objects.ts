// const User = {
//     name: "akash",
//     email: "ak@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// createUser({name: "akash", isPaid: false}) // it must contain all objects which was passed earlier while declaration

// createUser({name: "akash", isPaid: false, email: "ak@gmail.com"})  // not allowed
// let newUser = {name: "akash", isPaid: false, email: "ak@gmail.com"}
// createUser(newUser)  //allowed

// function createCourse() : {name: string, price: number}{  // (object) : {return type}{ declaration }
//     return {name: "reactjs", price: 399}
// }

 // -------------------------------------------------------------------------------------------------------------------------------------------------
    // type aliases
//  type User = {  // user defined type i.e. User
//     name: string,
//     email: string,
//     isActive: boolean
//  }


// function createUser(user: User){}
// function createUserr(user: User): User{
//     return {name: '', email:'', isActive: true}
// }

// createUser({name: '', email:'', isActive: true})

// ------------------------------------------------------------------------------------------------
type User = {  // user defined type i.e. User
    readonly _id: string // with readonly further noone can change _id
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number // its optional to fill value to tnis credcardDetails key
}

let myUser: User = {
    _id: "1245",
    name: "a",
    email:"b" ,
    isActive: false
}

type cardNo = {
    cardno: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNo & cardDate & {  // & used to combine many diff types 
    cvv: number
}

myUser.email = "ak@gmail.com" // allowed 
// myUser._id = "ak"  // not allowed
export {}