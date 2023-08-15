interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?:string
    // startTrial: () => string
    startTrial(): string,    // another way to represent same thing commented above
    getCoupon(couponname: string, value: number): number
}

interface User {       // it is aka reopening of interface 
    githubToken: string
}

interface Admin extends User {   // Admin now inherited all props of User
    role: "admin" | "ta" | "learner"
}

const akash: Admin = {dbId: 22 ,email: "ak@gmaik", userId:2211,
role: "admin",   // this can be passed when we access Admin
githubToken: "github", 
startTrial: () => {
    return "trial started"
},
getCoupon: (name: "akash62", off: 10 ) => { // no need to take same var name as couponname and value as above
    return 10;
}
}
akash.email = "Akk@gmail"
// akash.dbId = 33  // not allowed