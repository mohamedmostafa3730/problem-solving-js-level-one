// ==========-----problem {1}-----==========
/* Write a program that allow to user enter number then print it: */
/* var num1 = Number(window.prompt("Enter your number:"));
console.log(num1); */
// ==========-----problem {2}-----==========
/* Write a program that take number from user 
then print yes if that number can divide 
by 3 and 4 otherwise print no  */
/* var num1 = Number(window.prompt("Enter your number:"));
if (num1 % 3 == 0 && num1 % 4 == 0) {
  console.log("yes");
} else {
  console.log("no");
} */
// ==========-----problem {3}-----==========
/* Write a program that allows the user to insert 2 integers then print the max */
/* var num1 = Number(window.prompt("Enter your first number:"));
var num2 = Number(window.prompt("Enter your second number:"));
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
} */
// ==========-----problem {4}-----==========
/* Write a program that allows the user to insert an integer 
then print negative if it is negative number otherwise print positive. */
/* var num1 = Number(window.prompt("Enter your number:"));
if (num1 > 0) {
  console.log("positive");
} else {
  console.log("negative");
}
*/
// ==========-----problem {5}-----==========
/* Write a program that take 3 integers from user then 
print the max element and the min element. */
/*var num1 = Number(window.prompt("Enter your first number:"));
var num2 = Number(window.prompt("Enter your second number:"));
var num3 = Number(window.prompt("Enter your third number:"));
if (num1 > num2 && num1 > num3) {
  console.log("max element = " + num1);
  if (num2 > num3) {
    console.log("min element = " + num3);
  } else {
    console.log("min element = " + num2);
  }
} else if (num2 > num1 && num2 > num3) {
  console.log("max element = " + num2);
  if (num1 > num3) {
    console.log("min element = " + num3);
  } else {
    console.log("min element = " + num1);
  }
} else if (num3 > num1 && num3 > num2) {
  console.log("max element = " + num3);
  if (num1 > num2) {
    console.log("min element = " + num2);
  } else {
    console.log("min element = " + num1);
  }
}
*/
// ==========-----problem {6}-----==========
/* Write a program that allows the user to insert integer number then 
check If a number is oven or odd */
/* var num1 = Number(window.prompt("Enter your number:"));
if (num1 % 2 != 0) {
  console.log("odd");
} else {
  console.log("Even");
}
  */
// ==========-----problem {7}-----==========
/* Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant  */
/* var char = window.prompt("Enter your character:");
if (
  char == "a" ||
  char == "A" ||
  char == "e" ||
  char == "E" ||
  char == "i" ||
  char == "I" ||
  char == "o" ||
  char == "O" ||
  char == "u" ||
  char == "U"
) {
  console.log("vowel");
} else {
  console.log("Consonant");
}
*/
// ==========-----problem {8}-----==========
/* Write a program that allows user to insert integer then print all numbers between 1 to 
that’s number */
/* var num1 = Number(window.prompt("Enter your number:"));
for (var i = 0; num1 > i; num1--) {
  console.log(num1);
}
*/
// ==========-----problem {9}-----==========
// ==========-----solution (1)-----==========
/* Write a program that allows user to insert integer then print a multiplication table up to 12.  */
/* var num1 = Number(window.prompt("Enter your number:"));
for (var i = 0; i > 0; i++) {
  console.log(num1 * i);
} ==> this solution isn't working, however I don't know <==
*/
// ==========-----solution (2)-----==========
/* var num1 = Number(window.prompt("Enter your number:"));
var i = 1;
while (i <= 12) {
console.log(num1 * i);
i++;
}
*/
// ==========-----problem {10}-----==========
/* Write a program that allows to user to insert number then print all even numbers 
between 1 to this number */
/* var num1 = Number(window.prompt("Enter your number:"));
if (num1 % 2 == 0) {
  for (; num1 > 1; num1 -= 2) {
    console.log(num1);
  }
} else {
  num1--;
  for (; num1 > 1; num1 -= 2) {
    console.log(num1);
  }
} ==> from greater to smaller <==
*/
/* var num1 = Number(window.prompt("Enter your number:"));
if (num1 % 2 == 0) {
  for (var i = 2; num1 >= i; i += 2) {
    console.log(i);
  }
} else {
  num1--;
  for (var i = 2; num1 >= i; i += 2) {
    console.log(i);
  }
} ==> from smaller to greater <==
*/
// ==========-----problem {11}-----==========
/*Write a program that take two integers then print the power*/
/* var num1 = Number(window.prompt("Enter your number:"));
var num2 = Number(window.prompt("Enter your number:"));
console.log(num1 ** num2);
*/
// ==========-----problem {12}-----==========
/* Write a program to enter marks of five subjects and calculate total, average and 
percentage.
*/
/* var sum = 0;
var marks = Number(window.prompt("enter number of subjects :"));
for (var i = 0; i < marks; i++) {
  sum = Number(window.prompt("Enter Mark Number " + (i + 1) + " :")) + sum;
}
console.log("Total marks = " + sum);
console.log("Average Marks = " + sum / marks);
console.log("Percentage Marks = " + (sum / 500) * 100 + "%");
*/
// ==========-----problem {13}-----==========
/* Write a program to input month number and print number of days in that month.  */
/* var num1 = Number(window.prompt("Enter The Month Number:"));
if (num1 > 0 && num1 <= 12) {
  if (num1 == 4 || num1 == 6 || num1 == 9 || num1 == 11) {
    console.log("Days in Month: " + 30);
  } else if (num1 == 2) {
    console.log("Days in Month: " + 29);
  } else {
    console.log("Days in Month: " + 31);
  }
} else {
  console.log("value is not valid");
}
*/
// ==========-----problem {14}-----==========
/* Write a program to input marks of five subjects Physics,Chemistry,
Biology,Mathematics and Computer, Find percentage and grade
=> solution 1 = percentage and grade for every subject <=
*/
/* var subjects = Number(window.prompt("Enter The Number of subjects: "));
for (var i = 1; i <= subjects; i++) {
  var grade = Number(
    window.prompt("Enter The grade for subject number " + i + ": ")
  );
  if (grade > 0 && grade < 100) {
    if (grade >= 90) {
      console.log("your percentage is " + (grade / 100) * 100 + "%");
      console.log("your grade is A");
    } else if (grade >= 80) {
      console.log("your percentage is " + (grade / 100) * 100 + "%");
      console.log("your grade is B");
    } else if (grade >= 70) {
      console.log("your percentage is " + (grade / 100) * 100 + "%");
      console.log("your grade is C");
    } else if (grade >= 60) {
      console.log("your percentage is " + (grade / 100) * 100 + "%");
      console.log("your grade is D");
    } else if (grade >= 40) {
      console.log("your percentage is " + (grade / 100) * 100 + "%");
      console.log("your grade is E");
    } else {
      console.log("your percentage is " + (grade / 100) * 100 + "%");
      console.log("your grade is F");
    }
  } else {
    console.log("your grade is not correct, please try again");
  }
}*/
// => solution 2 = percentage and grade for totally subjects  <=
/* var sumOfSubjects = 0;
var subjects = Number(window.prompt("Enter The Number of subjects: "));
for (var i = 1; i <= subjects; i++) {
  sumOfSubjects =
    Number(window.prompt("Enter The grade for subject number " + i + ": ")) +
    sumOfSubjects;
}
var fallGrade = Number(subjects * 100);

var totalOfGrade = Number((sumOfSubjects / fallGrade) * 100);

if (fallGrade > 0 && fallGrade <= 500) {
  if (totalOfGrade > 90) {
    console.log("your percentage is " + totalOfGrade + "%");
    console.log("your grade is A");
  } else if (totalOfGrade >= 80) {
    console.log("your percentage is " + totalOfGrade + "%");
    console.log("your grade is B");
  } else if (totalOfGrade >= 70) {
    console.log("your percentage is " + totalOfGrade + "%");
    console.log("your grade is C");
  } else if (totalOfGrade >= 60) {
    console.log("your percentage is " + totalOfGrade + "%");
    console.log("your grade is D");
  } else if (totalOfGrade >= 40) {
    console.log("your percentage is " + totalOfGrade + "%");
    console.log("your grade is E");
  } else {
    console.log("your percentage is " + totalOfGrade + "%");
    console.log("your grade is F");
  }
} else {
  console.log("your grade is not correct, please try again");
}
*/
// ==========-----problem {15}-----==========
/* Write a program to print total number of days in month */
/* var num1 = Number(window.prompt("Enter The Month Number:"));
switch (num1) {
  case 1:
    console.log("Days in Month: " + 31);
    break;
  case 2:
    console.log("Days in Month: " + 29);
    break;
  case 3:
    console.log("Days in Month: " + 31);
    break;
  case 4:
    console.log("Days in Month: " + 30);
    break;
  case 5:
    console.log("Days in Month: " + 31);
    break;
  case 6:
    console.log("Days in Month: " + 30);
    break;
  case 7:
    console.log("Days in Month: " + 31);
    break;
  case 8:
    console.log("Days in Month: " + 31);
    break;
  case 9:
    console.log("Days in Month: " + 30);
    break;
  case 10:
    console.log("Days in Month: " + 31);
    break;
  case 11:
    console.log("Days in Month: " + 30);
    break;
  case 12:
    console.log("Days in Month: " + 31);
    break;
  default:
    console.log("value is not valid");
    break;
}
*/
// ==========-----problem {16}-----==========
/* Write a program to check whether an alphabet is vowel or consonant */
/* var char = window.prompt("Enter your character:");
switch (char) {
  case "A":
    console.log("vowel");
    break;
  case "a":
    console.log("vowel");
    break;
  case "E":
    console.log("vowel");
    break;
  case "e":
    console.log("vowel");
    break;
  case "I":
    console.log("vowel");
    break;
  case "i":
    console.log("vowel");
    break;
  case "O":
    console.log("vowel");
    break;
  case "o":
    console.log("vowel");
    break;
  case "U":
    console.log("vowel");
    break;
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("Consonant");
    break;
}
*/
// ==========-----problem {17}-----==========
/*Write a program to find maximum between two numbers*/
/* var num1 = window.prompt("Enter your first number:");
var num2 = window.prompt("Enter your second number:");
switch (true) {
  case num1 < num2:
    console.log(num2);
    break;
  default:
    console.log(num1);
    break;
}
*/
// ==========-----problem {18}-----==========
/* Write a program to check whether a number is even or odd */
/* var num = window.prompt("Enter your number:");
switch (true) {
  case num % 2 == 0:
    console.log("even");
    break;
  default:
    console.log("odd");
    break;
}
*/
// ==========-----problem {19}-----==========
/* Write a program to check whether a number is positive or negative or zero  */
/* var num = window.prompt("Enter your number:");
switch (true) {
  case num < 0:
    console.log("negative");
    break;
  case num == 0:
    console.log("ZERO");
    break;
  default:
    console.log("positive");
    break;
}
*/
// ==========-----problem {20}-----==========
/* Write a program to create Simple Calculator  */
/* var num1 = Number(window.prompt("Enter your first number:"));
var relation = window.prompt(
  "Enter the mathematical operation between [ + , + , * , / ] :"
);
var num2 = Number(window.prompt("Enter your second number:"));
switch (relation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    switch (num2) {
      case num1 == 0:
        console.log("Cannot divide by zero!");
        break;
      default:
        console.log(num1 / num2);
        break;
    }
    break;
  default:
    console.log("value is not valid");
    break;
}
*/
