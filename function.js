// Q1. Create one function with zero parameter having a console statement.

function test(){
    console.log("Hello");
}
test();

// Q2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7".

const op = (a,b) => {
    console.log(a+b);
}
op(3,4);

// Q3. Create one arrow function.

let op2 = (c,d) => {
    console.log(c-d);
}
op2(5,3);

/*
Q4. Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
*/

console.log("The answer is", undefined);

/*
Q5. Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
*/

console.log("The answers are", undefined, "&" , 21);

/*
Q6. Print output 
var x = 21;
a();
b();
console.log(a);
a = function() {
    x = 20;
    console.log(x);
}
b = function() {
    x = 40;
    console.log(x);
}
*/

console.log("a is not defined as the syntax for function declaration is wrong because it doesn't have a datatype. The execution phase will stop at a(); and won't move forward.")


// Q7. Write a function that accepts parameter n and returns factorial of n.

function fact(n) {
    let factorial = 1;
    for (let i=1; i<=n; i++){
        factorial = factorial * i;
    }
    console.log(n + "!", "is", factorial);
}
fact(4);