/* Q1. 
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
*/
console.log(1 , 2 , 3 , 4);


/* Q2.
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
*/
console.log(1)
console.log(0)

/* Q3. */
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}

/*Q4. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.*/

(function rectangle(l){
  let length = l;
  (function area(b) {
    let breadth = b;
    console.log(length * breadth);
  })(15)
})(10)

/* Q5. Take a variable in outer function and create an inner function to increase the counter every time it is called.*/

function counter(){
  var counter = 10;

  function IncreaseCounter() {
      return counter += 1;
  };

  return IncreaseCounter;
}

var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/* Q6. Print Output 
var a = 12;
(function () {
  alert(a);
})();
*/
console.log(12 + " will be alerted")



/* Q7.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
*/
console.log(12 + " will be alerted")

/* Q8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
*/
console.log("outerArg = " + 123)
console.log("innerArg = " + 456)
console.log("outerVar = a")
console.log("innerVar = b")
console.log("globalVar = xyz")