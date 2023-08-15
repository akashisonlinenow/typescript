// class User {
//     public email: string  // it should be defined before using in constructor in TS, but in JS its not needed
//     // everything we dont mark is by default public and can be accessed and changed globally
//     private name: string
//     readonly city: string = "abad" // it compulsorily needs initialization
//     private city2: string = "dubai"
//     #city3: string = "patna" // another way to declare private, but mainly it is used in JS
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// professional way to declare above class
class User {
    
    readonly city: string = "abad" // it compulsorily needs initialization
    
    constructor(public email: string, private name: string) {
        this.email = email;
        this.name = name;
    }
} 

// const akash = new User(email: "ak@com", name: "akash")  // wrong way
const akash = new User( "ak@com",  "akash")  // correct way
akash.city // you can access it but not change it in readonly
// akash.city2 // in private u cant change and access
// akash.city3 

