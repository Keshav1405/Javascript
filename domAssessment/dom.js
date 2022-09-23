// Q1. Write the code to access element which is having id as "text".

let a = document.getElementById("text");
console.log(a)

// Q2. Write the code to access element which is having tag as "h1".

let b = document.getElementsByTagName("h1")[0]
console.log(b)

// Q3. Write the code to access element which is having class as "box".

let c = document.getElementsByClassName("box")[0]
console.log(c)

/*Q4. "<h1>Hello </h1>
Change the heading from ""Hello"" to ""Hello World"" using DOM functions"*/

let d = document.getElementsByTagName("h1")[1]
console.log(d)
setTimeout(() => {
    d.innerText = "Hello World"
}, 5000);

// Q5. Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

change = function() {
    let cards = document.getElementById("cards")
    if(cards.style.flexDirection == "row"){
        cards.style.flexDirection = "column"
    }
    else{
        cards.style.flexDirection = "row"
    }
}

// Q6. What’s the difference between window vs document?

// Window is the global execution context and global object which holds all the properties of the webpage as keys in  a browser. 
// Document is a object which contains the Document Object Model(DOM). By accessing the document object, we can access the element in the HTML page.

/*Q7. "<h1>Hello </h1>
Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"*/

let e = document.getElementsByTagName("h1")[2]
e.id = "heading"
e.style.color = "red"
console.log(e)

// Q8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy".

replace = function() {
    let div = document.getElementsByClassName("content")[0]
    let btn = document.getElementsByClassName("btn")[1]
    if(div.innerText == "Hello World"){
        div.innerText = "Welcome to Elevation academy"
    }
    else{
        div.innerText = "Hello World"
    }
}

// Q9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

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

// Q10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected.

function dd(){
    let drop = document.getElementById("drop")
    let output = drop.options[drop.selectedIndex].innerText
    document.getElementById("txtval").value = output
}

/*
Q11. "Create a form having name ,email, phone no. , birth year 
Add validations - phone no. should start with 91 , it should be 10 digits
email should be domain prepbytes.com
birth year should be > 95".
*/   
//     let birthYear = document.getElementById("birthYear")    
//     console.log(birthYear.value)

// let form = document.getElementsByTagName("form")[0] 
function check() {             
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phone").value
    let birthYear = document.getElementById("birthYear").value
    
    let arr = email.split("@")
    let domainName = arr[arr.length - 1]
    let year = parseInt(birthYear.slice(0, 4))

    if(domainName != 'prepbytes.com'){
        alert("Email is Invalid")
    }
    if((phoneNumber.substr(0, 2) != '91' || phoneNumber.length != 10)){
        alert("Phone Number is Invalid")
    }
    if(year < 1995){
        alert("Birth Year is Invalid")
    }
}