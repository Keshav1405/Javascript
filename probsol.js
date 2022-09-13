// Q1. PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

var Minimal_Angle = (h, m) => 
{
  if (h == 12){
    h = 0;
  }
  if (m == 60){
    m = 0;
    h += 1;
  }
  let h_angle = 0.5 * ((h*60) + m);
  let m_angle = m * 6;
  if(h_angle > m_angle){
    return (h_angle - m_angle);
  }
  else{
    return (m_angle - h_angle);
  }
};

// Q2. Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.

var Check_Leap = (N) => 
{
  if(N%100 === 0 && N%400 === 0){
    return "Leap Year";
  }
 else if(N%4 === 0 && N%100 !== 0){
   return "Leap Year";
 }
 else{
   return "Non Leap Year";
 }
};

// Q3. Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.Now, You are given an integer N, write a program to check whether the given number is a Perfect Number or not.

var Perfect_Check = (N) => 
{
  let sum = 0;
  for(let i = 1; i <= N/2 ; i++){
    if(N%i === 0){
      sum += i;
    }
  }
  if(sum === N && sum !== 0){
    return "YES";
  } 
  else{
    return "NO";
  }
};

// Q4. Write a program which takes a numebr N as input from the user and You need to reverse the number.

var Reverse_Number = (N) => 
{
  let rev = parseFloat(N.toString().split('').reverse().join(''))
  return rev;
};

// Q5. You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.

var Substring_Check = (S1, S2) => 
{
  let result = S1.includes(S2);
  if(result == true){
    return "YES";
  }
  else{
    return "NO";
  }
};