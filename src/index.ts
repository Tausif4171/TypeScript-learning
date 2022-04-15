// Basic Types

let Name: string = 'Tausif Khan'  // Here if we stored number or boolean or any type it throws error,
                                  // because we have given the type string to variable 'Name'
let Rollno: number = 29

let isPresent: boolean = true

let Age: number
Age = 22

let x: any = 'string'  // Here we have store a string value to 'x' variable, we can store anything boolean, number, etc. 
x = 12    // Here we have store a number value to 'x'

// Array

let person: number[] = [1,2,3,4,5]
// person.push("Rehan")  // we cannot push string to number array

let arr: any[] = [1,'Faizan',true ]

// Tuple - Tuple can contain two or more values of different data types.

let data: [number,string,boolean] = [29,'Tausif Khan',true]
// console.log(data[0])

// Tuple Array 

let fruits: [number,string][]

fruits = [
    [10,'mango'],
    [20,'apple'],
    [30,'grapes']
]

console.log(fruits)

// Union - a particular variable to be able to hold more than one type

let pId: number | string = 2
pId='hello'
console.log(pId)

// Enum - Enums allow a developer to define a set of named constants.

enum Direction1 { // Here top is initialized with 5. All of the following members are auto-incremented from that point on. 
                  // In other words, Direction.top has the value 5, bottom has 6, left has 7, and right has 8.
    top=5,
    bottom,
    left,
    right
}
console.log(Direction1.right)

enum Direction2 {
    top="john",
    bottom="doe",
    left="lily",
    right='zayn'
}
console.log(Direction2.top)

// Objects

type user ={
    id: number,
    name: string
}

let info : user = {
    id:1,
    name:'Bob'
}

// console.log(info.name)