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

// Tuple

let data: [number,string,boolean] = [29,'Tausif Khan',true]
// console.log(data[0])

// Tuple Array 

let info: [number,string][]

info = [
    [10,'mango'],
    [20,'apple'],
    [30,'grapes']
]

console.log(info)
