console.log("Question - 1") //Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

let parent = {
    name: "Karen",
    nationality: "Spain",
    occupation: "Banker"
};

let child = {
    name: "Stuart"
};

child.__proto__ = parent;
console.log(child.nationality);

console.log("Question - 2") //Write code to explain prototype chaining.

let obj = {
    name: "mucho gusto",
    age: 24,
    institute: "prepbytes"
};

function Obj(givenName){
    this.name = givenName;
}

let obj2 = new Obj("Miguel");
console.log(obj2);

console.log("Question - 3") //Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

let arr = new Array(27, 30, 72, 9, 45);
arr.__proto__.sum = function(givenArray){
    let sum = 0;
    for(let i of givenArray){
        sum += i;
    }
    return sum;
}
let x = arr.sum(arr);
console.log(x);

let arr2 = new Array(32, 574, 5, 20, 467);
let y = arr2.sum(arr2);
console.log(y);

console.log("Question - 4") //Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function abc() {
    this.name = "Vik"
    this.company = "Suprise me!!"
    this.id = 00274
    xyz.call(this)
}

function xyz() {
    this.city = "London"
    this.car = "Aston Martin"
}
let employee = new abc();
console.log(employee);

let name = function(Obj){
    for(let i in Obj){
        console.log(i);
    }
}
name(employee);