// Basic Types
let id: number = 67
let company: string = 'Narek Media'
let isPublished: boolean = true
let x: any = 'any type'

let ids: number[] = [1,2,3,4,5] // arry type

// ids.push('Some string') //err because types that's not catch 

// Tuple

let person: [number, string, boolean] = [1, 'Narek', true]

// Tuple Arr

let employee: [number, string] []

employee = [
    [1, 'Narek'],
    [2, 'Vahe'],
    [3, 'Karen']
]

// Union

let pid: string | number = 22

pid = "33"

// Enum

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log( Direction1.Up ) // Output 0 , Direction1.Down -> output 1
// You can change their value like Up = 1 and output will be 1 for it and for Down will be 2 

// Objects

type User = {
    id: number,
    name: string
}

const user1: User = {
    id: 1,
    name: 'Narek'
}

// Type Assertion
let cid: any = 1
// let customerId = <number> cid
let customerId = cid as number

// Functions

function log (message: string | number): void{
    console.log(message)
}

function addNum(x: number, y: number): number{
    return x + y 
} 

log (addNum(60,7))

// Interfaces

interface UserIntarface {
    readonly id: number // Cant change outside
    name: string
    age?: number // Optional
}

const user2: UserIntarface = {
    id: 2,
    name: 'Vahe'
}

type Point = number | string
const p1:Point = 1
const p2:Point = "1"

// Classes

interface PersonIntarface {
    readonly id: number 
    name: string
    register() : string
}

class Person implements PersonIntarface {
    id: number  // You can make them private or protected
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }

}

const narek = new Person(1, "Narek")

console.log(narek)

console.log(narek.register())
