class User {
    email: string  // it should be defined before using in constructor in TS, but in JS its not needed
    name: string
    readonly city: string = "abad" // it compulsorily needs initialization
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

// const akash = new User(email: "ak@com", name: "akash")  // wrong way
const akash = new User( "ak@com",  "akash")  // correct way
// akash.city = "delhi";
