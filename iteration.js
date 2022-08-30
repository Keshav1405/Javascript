// Q1. Take a number from the user and print the count of digits in that number.

const Find_Digits = (N) => 
{
  let i=N, digits=0;
	 while(i>0){
	   x = i%10;
	   digits = digits + 1;
	   i = parseInt(i/10);
	 }
	 return digits;
};

// Q2. Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

const Find_Five = (N) => 
{
	 let i=N, digit5=0;
	 while(i>0){
	   x = i%10;
	   if(x==5){
	     digit5 = digit5 + 1;
	   }
	   i = parseInt(i/10);
	 }
	 return digit5;
};

// Q3. You are given an integer N, and your task is to find the sum of all the even integersstarting from 1 upto N (N inclusive).

const findSum = (n) => {
	let sum=0;
	for(let i=1; i<=n; i++){
	  if(i%2===0){
		sum = sum + i;
	  }
	}
	return sum;
  };

// Q4. Write a program that takes a number from the user and get the sum of the digits present in the number.

const Number_Sum = (N) => 
{
	let i = N, sum = 0;
    while(i != 0){
        x = i % 10;
        sum = sum + x;
        i = parseInt(i/10);
    }
  return sum;
};

// Q5. Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

const Print_Odd = (N) => {
	console.log(2);
	for(let i=3 ; i<=N ; i++){
	  if(i%2 !== 0){
		console.log(i);
	  }
	}
  };

// Q6. Write a program which ask user for no of lines and print a pattern using an asterik.

const Print_pattern = (N) => {
	for(let i=1;i<=N; i++){
	  let a = "*";
	  console.log(a.repeat(i));
	}
  };

// Q7. Write a program which takes  a number from user and check whether number is prime number or not a prime number

const Prime_Check = (N) => {
	let i;
	let isPrime = true;
	  if(N===0 || N===1) {
	  isPrime = false;
	}
	else {
	  for(i=2 ; i<=N/2 ; i++){
		if (N%i === 0){
		  isPrime = false;
		  break;
		}
		else {
		  isPrime = true;
		}
	  }
	}
	if(isPrime)
	return("YES");
	else
	return("NO");
  };

//   Q8. You are given an integer N, and your task is to print all the integers starting from 1 till N (N inclusive).

const printNumbers = (n) => {
	let num;
	for(let i=1; i<=n; i++){
	  num = i;
	  console.log(num);
	}
  };

// Q9. Write a program which takes a number from user and print the table.

const Print_Table = (N) => 
{
  let num = N;
  let tab = 0;
	for(let i=1; i<=10; i++){
	  num = N*i;
	  tab = N + " * " + i + " = " + num;
	  console.log(tab);
	}
};