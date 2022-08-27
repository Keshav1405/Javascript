/*
Q1. Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.
*/

const Calculator = (A, B, C) => 
{
	switch(A){
	  case '+' :
	    return(B+C);
	    break;
	  case '-' :
	    return(B-C);
	    break;
	  case '*' :
	    return(B*C);
	    break;
	 case '/' :
	    return(B/C);
	    break;
	}
};

/*
Q2. Write a program that takes a number and prints whether the number is divisible by 
6 and 9 or not.
*/

const Check_divisibility = (N) => {
    if ((N%6===0) && (N%9===0)){
      return("Divisible by both");
    }
    else{
      return("Not Divisible by both");
    }
  };

/*
Q3. You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.
*/

const isEligible = (a) => {
    if (a>18){
      return("Eligible for Voting");
    }
    else{
      return("Not Eligible for Voting");
    }
  };

/*
Q4. PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.The relationships between integers X and Y are as follows:
i) If X<Y, it means that X is smaller than Y.
ii) If X>Y, it means that X is greater than Y.
iii) If X=Y, it means that X is equal to Y. 
*/

const findRelation = (x,y) => {
    if(x<y){
      return(x +" is smaller than "+ y)
    }
    else if (x>y){
      return(x +" is greater than "+ y)
    }
    else {
      return(x +" is equal to "+ y)
    }
  };

/*
Q5. Your school has the following grading system based upon the marks(M) obtained by a student:
i) If M≤10, the grade will be E.
ii) If 11≥M≤20, the grade will be D.
iii) If 21≥M≤30, the grade will be C.
iv) If 31≥M≤40, the grade will be B.
v) If 41≥M≤50, the grade will be A.
Your friend will enter his marks out of 50, and your task is to print his grades using a switchstatement.
*/

const findGrades = (a) => {
    switch(M){
      case (M<=10):
        return(a="E");
        break;
      case ((11<=M) && (M<=20)):
        return(a="D");
        break;
      case ((21<=M) && (M<=30)):
        return(a="C");
        break;
      case ((31<=M) && (M<=40)):
        return(a="B");
        break;
      case ((41<=M) && (M<=50)):
        return(a="A");
        break;
    }
  };

  const findGrades = (a) => {
    if (M<=10){
        a="E";
        return(a);
      }
      else if ((11<=M) && (M<=20)){
        a="D";
        return(a);
      }
      else if ((21<=M) && (M<=30)){
        a="C";
        return(a);
      }
      else if ((31<=M) && (M<=40)){
        a="B";
        return(a);
      }
      else if ((41<=M) && (M<=50)){
        a="A";
        return(a);
      }
  };

/*
Q6. You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

| P or p 	- PrepBytes      	|
| Z or z 	- Zenith         	|
| E or e 	- Expert Coder   	|
| D or d 	- Data Structure 	|
*/

const getValue = (a) => {
    if (a=='P' || a=='p'){
      return("PrepBytes");
    }
    else if (a=='Z' || a=='z'){
      return("Zenith");
    }
    else if (a=='E' || a=='e'){
      return("Expert Coder");
    }
    else if (a=='D' || a=='d'){
      return("Data Structure");
    }
  };

/*
Q7. Take three numbers and print the largest number among them if all of three are same print −1.
*/

const Max_out_of_three = (A,B,C) => {
  if(A>B && A>C){
    return A;
  }
  else if(B>A && B>C){
      return B;
  } 
  else if(C>A && C>B){
      return C;
  }
  else if (A=B=C){
    return ("-1");
  }
};

/*
Q8. You are given 3 distinct integers X,Y, and Z, and your task is to find and return the second smallest integer among the three provided integers.
*/

/*
Q9. 
*/