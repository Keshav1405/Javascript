let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]

/*
Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

['JOHN', 'BABA', 'YAGA', 'WICK']
*/

let arr = []
for(let i of studentRecords){
    let x = i.name.toUpperCase()
    arr.push(x)
}
console.log(arr)

/*
Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
*/

let arr2 = []
for(let i in studentRecords){
    let x = studentRecords[i].marks
    if(x > 50){
        arr2.push(studentRecords[i])
    }
}
console.log(arr2)

/*
Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
*/

let arr3 = []
for(let i of studentRecords){
    let x = i.marks
    let y = i.id
    if(x > 50 && y > 120){
        arr3.push(i)
    }
}
console.log(arr3)

/*
Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
*/

let sum = 0
for(let i in studentRecords){
    let x = studentRecords[i].marks
    sum += x
}
console.log(sum)

/*
Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
*/

let arr4 = []
for(let i of studentRecords){
    let x = i.name
    let y = i.marks
    if(y > 50){
        arr4.push(x)
    }
}
console.log(arr4)

/*
 Question 6: This time we are required to print the sum of marks of the students with id > 120.
*/

let sum2 = 0
for(let i in studentRecords){
    let x = studentRecords[i].marks
    let y = studentRecords[i].id
    if(y > 120){
        sum2 += x
    }
}
console.log(sum2)

/*
Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
*/

let sum3 = 0
for(let i of studentRecords){
    let x = i.marks
    if(x < 50){
        x += 15
    }

    if (x > 50){
        sum3 += x
    }
}
console.log(sum3)

/*
Question 8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
*/

let arr5 = []
let obj1 = {name: "Chandler", class: "sarcasm101", rollno: 404}
arr5.push(obj1)
let obj2 = {name: "Joey", class: "drama", rollno: 18}
arr5.push(obj2)
let obj3 = {name: "Monica", class: "homeScience", rollno: 15}
arr5.push(obj3)
let obj4 = {name: "Phoebe", class: "sociology", rollno: 13}
arr5.push(obj4)
let obj5 = {name: "Rachel", class: "fashionTechnology", rollno: 20}
arr5.push(obj5)
let obj6 = {name: "Ross", class: "paleontology", rollno: 10}
arr5.push(obj6)

console.log(arr5)