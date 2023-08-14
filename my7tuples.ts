// const user: (string | number)[] = [1, "ak"]
let tUser: [string, number, boolean]

// tUser = [true, 1223, "fg"] // not allowed - order matters in tuples
tUser = ["ak",121, true] // allowed

let rgb: [number, number, number] = [255, 123, 112] // allowed

type User = [number, string]
const newUser: User = [112, "ak@gmail.com"]
newUser[1] = "akbhai@gmail" // allowed - u can override
