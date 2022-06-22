//Calculator

const Calculator = (A, B, C) => 
{
	switch(A){
	  case "+":
	    return (B+C);
	    break;
	    
	    case "-":
	    return (B-C);
	    break;
	    
	    case "*":
	    return (B*C);
	    break;
	    
	    case "/":
	    return (B/C);
	    break;
	    
	}
    
};

//Check whether the conditions are fulfilled or not

const Check_divisibility = (N) => {
    
    if ((N%6===0) && (N%9===0)) {
      return "Divisible by both";
    }
    else {
      return "Not Divisible by both";
    }
  };

//Eligible Voter

const isEligible = (a) => {
    if (a>18) {
     return "Eligible for Voting";
    }
    else {
     return "Not Eligible for Voting";
    }
};

//Find relations

const findRelation = (x,y) => {
    if(x<y) {
     return x+" is smaller than " +y;
    }
    else if(x>y) {
     return x+" is greater than "+y;
    }
    else {
     return x+ " is equal to "+y;
    }
};

//Find grades

const findGrades = (a) => {
    if (a<=10) {
      return "E";
    }
    else if(a>=11 && a<=20) {
      return "D";
    }
     else if(a>=21 && a<=30) {
      return "C";
    }
     else if(a>=31 && a<=40) {
      return "B";
     }
    else { 
      return "A";
    }
};

//Get value

const getValue = (a) => {
    if ((a=="P") || (a=="p")) {
      return "PrepBytes";
    }
     else if ((a=="z") || (a=="Z")) {
      return "Zenith";
    }
     else if ((a=="E") || (a=="e")) {
      return "Expert Coder";
    }
     else {
      return "Data Structure";
    }
};


//Find the maximum number out of three

const Max_out_of_three = (A,B,C) => {
    if (A>B && A>C) {
      return A;
    } 
    else if (B>A && B>C){
      return B;
    }
    else if (C>A && C>B) {
      return C;
    }
    else {
      return "-1";
    }
 
 };

//Second smallest

const findSndSmallest = (x,y,z) => {
    if ((x>y && x<z) | (x<y && x>z)) {
      return x;
    }
    else if ((y>x && y<z) | (y<x && y>z)) {
      return y;
    }
    else {
      return z;
    }
};

//Check whether the traingle is acute or obtuse

const Triangle_Check = (A,B,C) => {
    if(A<90 && B<90 && C<90) {
      return "acute";
    } 
    else {
      return "obtuse";
    }
 
     
 };
