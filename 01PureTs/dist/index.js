"use strict";
class User {
    constructor(email, name) {
        this.city = "abad"; // it compulsorily needs initialization
        this.email = email;
        this.name = name;
    }
}
// const akash = new User(email: "ak@com", name: "akash")  // wrong way
const akash = new User("ak@com", "akash"); // correct way
// akash.city = "delhi";
