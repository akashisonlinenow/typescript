let greetings: string = "Hello Akash";

greetings.toLowerCase()
console.log(greetings);


// number
// number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
let userid: number = 334466.3

// boolean
// boolean is for the two values true and false
let isloggedin: boolean = false

// any 
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
let hero; // not advised
let hero1 : string  // advised to do like this

function getHero() {
    return "thor"
}

hero = getHero()
hero1 = getHero()






export {}