/* Q1. You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef
*/

let str = "abcadeecfb";
let N = str.length;
let s = new Set(str);
let str2 = [...s].sort().join('');
console.log(str2);

/* Q2.You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2
f=1
*/

let str1 = "abcadeecfb";
let N1 = str1.length;
let arr = str1.split("");
let freq = new Map()
for(let i = 0; i < arr.length; i++){
    if(freq.has(arr[i]) == true){
        let val = freq.get(arr[i])
        freq.set(arr[i] , val+1);
    }
    else{
        freq.set(arr[i] , 1)
    }
}
for(let i of freq){
    console.log(i[0] + "=" + i[1]);
}

/* Q3. You are given array (ARR) of length N, find the count of all the unique elements in it.

Input:
[3, 4, 7, 7, 4, 8, 8, 9, 8]

Output:
3 : 1
4 : 2
7 : 2
8 : 3
9 : 1
*/

let ARR = [3 ,4 ,7 , 7 , 4 , 8, 8 , 9 , 8 ];
let s1 = new Set(ARR);
let count = 0;
for(let i of s1){
  for(let j of ARR){
    if(i == j){
      count++;
    }
  }
  console.log(i + " : " + count);
  count = 0;
}