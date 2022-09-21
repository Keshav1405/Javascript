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

let now = new Date();
let hour = now.getHours();
let msg1 = document.getElementById("msg1")
let msg2 = document.getElementById("msg2")
let picture = document.getElementById("pic")
let am = document.getElementsByClassName("b1_3")[0]
if(12 <=hour && hour < 17){
    msg1.innerText = "GOOD AFTERNOON!! TAKE SOME SLEEP"
    msg2.innerText = "LET'S HAVE SOME LUNCH !!"
    picture.src = "./Images/Component 30 – 1.svg"
} 
if(17 <= hour && hour < 19){
    msg1.innerText = "GOOD EVENING !!"
    msg2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    picture.src = "./Images/lunch_image.png"
}
if(19 <= hour && hour < 6){
    msg1.innerText = "GOOD NIGHT !!"
    msg2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
    picture.src = "./Images/Component 32 – 1.svg"
}
if(12 <= hour && hour < 24){
    am.innerText = "PM"
}

function ddsel1(){
    let drop = document.getElementsByClassName("time")[0]
    let output = drop.options[drop.selectedIndex].innerText
    document.getElementById("txtval1").innerText = output 
}

function ddsel2(){
    let drop2 = document.getElementsByClassName("time")[1]
    let output = drop2.options[drop2.selectedIndex].innerText
    document.getElementById("txtval2").innerText = output 
}

function ddsel3(){
    let drop = document.getElementsByClassName("time")[2]
    let output = drop.options[drop.selectedIndex].innerText
    document.getElementById("txtval3").innerText = output 
}

function ddsel4(){
    let drop = document.getElementsByClassName("time")[3]
    let output = drop.options[drop.selectedIndex].innerText
    document.getElementById("txtval4").innerText = output 
}