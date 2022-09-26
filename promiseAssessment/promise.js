// Q1. Write one example explaining how you can write a callback function ?

setTimeout(myFunction, 5000);

function myFunction(){
    let Q1 = document.getElementById("Q1")
    let boldElement = document.createElement("b")
    boldElement.innerText = " is executed"
    boldElement.style.color = "red"
    Q1.append(boldElement)
}

/*Q2. Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Explain callback hell.
Numbers
1
2
3
4
5
6
7
*/

setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
            setTimeout(() => {
                console.log(4)
                setTimeout(() => {
                    console.log(5)
                    setTimeout(() => {
                        console.log(6)
                        setTimeout(() => {
                            console.log(7)
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

/*Q3. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Numbers
1
2
3
4
5
6
7
*/

setTimeout(() => {
    let myPromise = new Promise((resolve) => {
        resolve(setTimeout(() => {
            console.log(1)
            setTimeout(() => {
                console.log(2)
                setTimeout(() => {
                    console.log(3)
                    setTimeout(() => {
                        console.log(4)
                        setTimeout(() => {
                            console.log(5)
                            setTimeout(() => {
                                console.log(6)
                                setTimeout(() => {
                                    console.log(7)
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000));
    })
    myPromise.then()
}, 7000);

// Q4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

let x = new Promise((resolve, reject) => {
    let a = prompt("Enter argument for promise function:");
    if(a == "yes"){
        resolve("Promise Resolved")
    }
    else{
        reject("Promise Rejected")
    }
})
function func2(message){
    console.log(message);
}
x.then(func2).catch(func2)

// Q5. Create examples to explain callback function.

function print(val){
    console.log(val)
}

function rect(length, breadth){
    area = (length * breadth)
    print(area);
}

let a1 = rect(12, 18);

// Q6. Create examples to explain callback hell function.

let text = document.getElementsByClassName("hell");
let example = (text) => {
    setTimeout(() => {
        text[0].style.opacity = "1"
        setTimeout(() => {
            text[1].style.opacity = "1"
            setTimeout(() => {
                text[2].style.opacity = "1"
            }, 1000);
        }, 1000);
    }, 1000);
}
example(text)

// Q7. Create examples to explain promises function.

let promEx = new Promise((resolve, reject) => {
    let x = 20;
    if(x < 50){
        resolve("x is less than 50")
    }
    else{
        reject("x is greater than 50")
    }
})
function display(text){
    console.log(text);
}
promEx.then(display).catch(display)

// Q8. Create examples to explain async await function.

async function asyncEx() {
    let x = new Promise((resolve, reject) => {
        let a = 337
        if(a%2 == 0){
            resolve(`${a}` + " is Even")
        }
        else{
            reject(`${a}` + " is Odd")
        }
    })

    let func = (arg) => {
        console.log(arg)
    }
    await x.then(func).catch(func)
}
asyncEx()

// Q9. Create examples to explain promise.all function.

const promise1 = Promise.resolve(5);
const promise2 = true;
const promise3 = new Promise((resolve, reject) => {
    let x = 5
    if(x < 10){
        resolve("Resolved")
    }
    else{
        reject("Rejected")
    }
});

Promise.all([promise1, promise2, promise3]).then((val) => {
  console.log(val);
});