// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 5746556485685648565846548n



// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Arsalan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myYoutubName = "Arsalandotcom"

let anotherName = myYoutubName
anotherName = "Arsalan"

console.log(myYoutubName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwoemail = "Arsalan@google.com"

console.log(userOne.email);
console.log(userTwo.email);
