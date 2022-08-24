// Q1. You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.

const AddTwoNumbers = (a,b) => {
    return a+b;
};

// Q2. You are given two number first as Aand second as B and check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input

const Is_Valid = (a,b) => {
    return (a<10) && (a>b)
  };

// Q4. You are provided a four digit number N only. Your task is to print out the first digit of that number.
// Note: You have to complete First_Digit function. No need to take any input.

const First_Digit = (n) => {
    let d1= n%1000;
    return d2= ((n-d1)/1000);
  };

// Q5. You are provided a four digit number N only. Your task is to print out the last digit of that number.
// Note: You have to complete Last_Digit function. No need to take any input.

const Last_Digit = (n) => {
    return n%10;
  };

// Q6. You are provided with two numbers A and B where A as  divisor and B as dividend. Your task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.

const Find_the_remainder = (a,b) => {
    return b%a;
  };

// Q7. You are provided with two numbers A and B. Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.

const Multiply_two_number = (a,b) => {
    return a*b;
  };

// Q8. Shyam has got his marks in three subjects as A, B, and C (out of 100).Write a program to calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.

const Sum = (A, B, C) => 
{
 return (A+B+C);
};

const Average = (A, B, C) => 
{
 let d1=((A+B+C)/3);
 return parseFloat(d1);
};