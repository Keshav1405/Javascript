let btn = document.getElementsByTagName("button")[0]
btn.addEventListener(
    "click", ()=>{
        let div = document.getElementById("q1");
        let h1 = document.createElement("h1");
        h1.innerText = "MERN stack";
        div.appendChild(h1);
    }
);

//q2
let firstH1 = document.getElementsByTagName("h1")[0];

//q3
function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    document.getElementById("HH").innerText = HH;
    document.getElementById("MM").innerText = MM;
    document.getElementById("SS").innerText = SS;
    setTimeout(getTime, 1000);
}
getTime();

//q4
let btn2 = document.getElementsByTagName("button")[1]
btn2.addEventListener(
    "click", ()=>{
        let div = document.getElementById("q4");
        if(div.innerText == "Hello World"){
            div.innerText = "Welcome to Elevation academy"
        }
        else{
            div.innerText = "Hello World"
        }
    }
);

//q5
let btn3 = document.getElementsByTagName("button")[2]
btn3.addEventListener(
    "click", ()=>{
        let div = document.getElementById("q5");
        div.style.visibility = "hidden";
    }
);

//q6
let arr = [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0]
let zeroCount = 0;
for(let i of arr){
    if(i == 0){
        zeroCount++;
    }
}
console.log("The no. of zero's are " + zeroCount);

//q7
let arr2 = [12, 41, 54, 22, 67, 9, 11, 23, 40]
let countOdd = 0, countEven = 0;
for(let i of arr2){
    if((i&2) == 0){
        countEven++;
    }
    else{
         countOdd++;
    }
}
console.log("Even count is " + countEven + " and odd count is " + countOdd)

//q8
let str = "qwerTYUiiop";
let str2 = str.toLowerCase();
let countVowel = 0;
for(let i of str2){
    if(i == 'a'){
        countVowel++;
    }
    else if(i == 'e'){
        countVowel++
    }
    else if(i == 'i'){
        countVowel++
    }
    else if(i == 'o'){
        countVowel++
    }
    else if(i == 'u'){
        countVowel++
    }
};
console.log("The no. of vowels are " + countVowel);

//q9
let obj1 = {
    name: "zxcvb",
    arr: [1, 8, 5, 7, 4, 9]
}

let obj2 = {
    name: "wertyu",
    arr2: [1, 8, 5, 7, 4, 9]
}

let result = true;
let check = function(){
    let len;
    if(obj1.arr.length > obj2.arr2.length){
        len = obj1.arr.length;
    }
    else{
        len = obj2.arr2.length;
    }
    for(let i = 0; i < len; i++){
        if(obj1.arr[i] == obj2.arr2[i]){
            result = true;
        }
        else{
            result = false;
            break;
        }
    }
    return result;
}
check();
if(result == true){
    console.log("Arrays are same")
}
else{
    console.log("Arrays are not same")
}