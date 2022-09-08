// Q1. You are given a string S, and your task is to return an array B (having a size of 2), where B[0] contains the count of character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.

const countCharacters = (S) => 
{
  let B = [];
  let countA = 0, countD = 0;
  for(let i = 0; i < S.length; i++){
    if(S.charAt(i) == "A"){
      countA += 1;
    }
    else if(S.charAt(i) == "D"){
      countD += 1;
    }
  }
  B.push(countA);
  B.push(countD);
  return (B);
};

// Q2. Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.

var Count_Occ = (s) => 
{
  let count = 0;
  let str = '';
  let op = "";
  for(let i = s.length -1; i >= 0; i--){
    for(let j = 0; j < s.length; j++){
      if(s[i] == s[j]){
        count++;
      }
    }
    if(count > 1){
      str = s[i];
      op = op + " " + s[i] + count;
      // s = s.replace(str,'');
      s = s.split(str).join('');
    }
    count = 0;
  }
  let op2 = op.trim();
  return op2.split(' ').sort().join('');
};

// Q3. You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

var Count_Vowels= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con === true){
        count++;
    }
}
  return count;
};

// Q4. You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the concatenation of both the given strings.

var Concatenate_Strings = (S1, S2) => 
{
  let str = S1.concat(S2)
  return (str);
};

// Q5. You are given a string S, and your task is to return the length of the string S.

const findLength = (S) => 
{
  return S.length;  
};

// Q6. You are given a string S consisting of two letters A and D,where each character represent the winner of N games playedbetween Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which player wins the maximumnumber of games or there is a draw between them.

var Game_Winner = (S) => 
{
  let countA = 0 , countD = 0;
  for(let i = 0; i < S.length; i++){
    if(S[i] == "A"){
      countA++;
    }
    else if(S[i] == "D"){
      countD++;
    }
  }
  if(countA > countD){
    return "Aditya";
  }
  else if(countA < countD){
    return "Danish";
  }
  else{
    return "Draw";
  }
}

// Q7. You are given two strings S and P, and your task is to concatenate them and return theconcatenated string.

const joinStrings = (S, P) => 
{
  let str = S.concat(P);
  return str;
};

// Q8. You are given a string S, Your task is to check wether the given string is a Palindrome or not.

var Palin_Check = (str) =>
{
  let output = "";
  let j = str.length - 1;
  for (let i=j ; i >=0 ; i--){
    output += str[i];
  }
  if(str == output){
    return "True";
  }
  else{
    return "False";
  }
}

// Q9. You are given a string S, Your task is to Reverse the string.

var Reverse_String = (str) => 
{
  let rev = "";
  let j = str.length - 1;
  for (let i=j ; i >=0 ; i--){
    rev += str[i];
  }
  return rev;
};

// Q10. You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.

var String_Match = (S1,S2) => 
{
  let result = S1.localeCompare(S2);
  if (result === 0){
    return "YES";
  }
  else{
    return "NO";
  }
};

// Q11. You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.

var Replace = (S, pattern , text) => 
{
  let str = S.replace(pattern , text);
  return str;
};

// Q12. You are given a string S, Your task is to split the string with respect to spaces.

var Split_the_string = (S) => 
{
  let arr = S.split(" ");
  return arr;
};

// Q13. You are given a string Scontaining both uppercase and lowercase letters. You need to find out the number of vowels and the number of consonants in the given string.

var Count_Vowels= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con === true){
        count++;
    }
}
  return count;
};
var Count_Consonants= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con !== true){
        count++;
    }
}
  return count;     
};