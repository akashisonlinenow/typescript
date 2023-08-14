// const superHeros = []
// superHeros.push("spiderman")  // error - not allowed

const superHeros: string[] = []  // correct synatx - it can have string, array, boolean etc
const heroPower: number[] = [] // first way to represent array
const heroPowerr: Array<number> = [] // second similar way to represent array

type User = {  // third way by declaring user defined type
    name: string
    isActive: boolean
}
const allUsers: User[] = []

const MLModels: number[][] = [  // third way - 2D representation of array
    [255, 255, 255], 
    []
]


superHeros.push("spiderman")
heroPower.push(2)
allUsers.push({name: '', isActive: true})