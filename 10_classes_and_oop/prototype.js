// let myName = "arsalan    ";
// let mychannel = "chai     "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.arsalan = function(){
    console.log(`Arsalan is present in all objects`);
}

Array.prototype.heyArsalan = function(){
    console.log(`Arsalan says hello`);
}

// heroPower.arsalan()
// myHeros.arsalan()
// myHeros.heyArsalan()
// heroPower.heyArsalan()

// inheritance

const User = {
    name: "chai",
    email: "arsalan@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Coding     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"arsalan".trueLength()
"iceTea".trueLength()