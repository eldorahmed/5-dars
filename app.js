// 5-dars Vazifa  Functions
alert("Masalar yechib comment qilib qoyilgan");
//  1-masala

// function calculate(a, b) {
//   return a + b;
// }
// console.log(calculate(3, 6));

// 2-masala

// function toSecunds(minutes) {
//   return minutes * 60;
// }
// console.log(toSecunds(7) + " sekund");

// 3-masala

// function nextInt(int) {
//   return int + 1;
// }
// console.log(nextInt(7));

// 4-masala

// function triangleArea(a, b) {
//   return (a * b) / 2;
// }
// console.log(triangleArea(3, 6));

// 5-masala

// function ageToDays(age) {
//   return age * 365;
// }
// console.log(ageToDays(27));

// 6-masala

// function calculate(num) {
//   return num ** 3;
// }
// console.log(calculate(5));

// 7-masala

// function firstNum(array) {
//   return array[0];
// }
// let array = [1, 2, 3];
// console.log(firstNum(array));
// console.log(firstNum(["a", "b", "c"]));

// 8-masala

// function calculate(a, b) {
//   return a * b;
// }
// console.log(calculate(3, 6));

// 9-masala

// function toSecunds(h) {
//   return h * 3600;
// }
// console.log(toSecunds(24) + " sekund");

// 10-masala

// function calculate(a, b) {
//   return a + b - 1;
// }
// console.log(calculate(3, 6));

// 11-masala

// function calculate(a, b) {
//   return a % b;
// }
// console.log(calculate(1, 3));
// console.log(calculate(-9, 45));
// console.log(calculate(3, 4));

// 12-masala

// const areaOfRectangle = (a, b) => {
//   return a * b;
// };
// console.log(areaOfRectangle(3, 4));

// 13-masala

// const addString = (a) => {
//   return `Someting ${a}`;
// };

// console.log(addString("Teacher"));

// 14-masala

// const sqr = (n) => {
//   return n ** 2;
// };
// console.log(sqr(5));

// 15-masala

// function zero(n) {
//   if (n <= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// zero(-8);

// 16-masala

// function calculate(n) {
//   return (n - 2) * 180;
// }
// console.log(calculate(4));

// 17-masala

// function calculate(x, y) {
//   return x * 2 + y * 3;
// }
// console.log(calculate(4, 2));

// 18-masala

// const addString = (a) => {
//   return `${a}Edabit`;
// };
// console.log(addString("Teacher"));

// 19-masala

// const biggerThanHundred = function (a, b) {
//   if (a + b < 100) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// biggerThanHundred(34, 45);
// biggerThanHundred(34, 75);

// 20-masala

// let newArray = [];
// function array(n) {
//   for (i = 1; i <= n; i++) {
//     newArray.push(i);
//   }
// }
// array(20);
// console.log(newArray);

// 21-masala

// function countLegs(tovuq, qoy, mol) {
//   return tovuq * 2 + qoy * 4 + mol * 4;
// }
// console.log(countLegs(2, 3, 5));

// 22-masala

// function bool(a, b) {
//   if (a == true && b == false) {
//     console.log(false);
//   } else if (a == true && b == true) {
//     console.log(true);
//   } else if (a == false && b == true) {
//     console.log(false);
//   } else if (a == false && b == false) {
//     console.log(false);
//   }
// }
// bool(true, false);
// bool(true, true);

// 23-masala

// function isEqual(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEqual(4, 4);
// isEqual(4, 8);

// 24-masala

// function points(win, draw, lost) {
//   return win * 3 + draw * 1;
// }

// console.log(points(6, 2, 3));

// 25-masala

// function secunds(h, m) {
//   return h * 3600 + m * 60;
// }

// console.log(secunds(1, 2));

// 26-masala

// function fun(n) {
//   if (n === 7) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// fun(4);
// fun(7);
// fun(9);

// 27-masala

// function isEqual(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEqual(1, 1);
// isEqual(1, "1");

// 28-masala

// function funToString(bool) {
//   return String(bool);
// }
// console.log(funToString(true));
// console.log(typeof funToString(true));

// 29-masala

// const arrowFunction = (v) => {
//   return v;
// };
// console.log(arrowFunction(3));
// console.log(arrowFunction("3"));
// console.log(arrowFunction(true));

// 30-masala

// const numberOfFrame = (minute, frame) => {
//   return minute * 60 * frame;
// };
// console.log(numberOfFrame(1, 1));
// console.log(numberOfFrame(10, 1));
// console.log(numberOfFrame(10, 25));

// 31-masala

// function evaluateExpression(expression) {
//   let operands = expression.split(/[\+\-\*\/]/);
//   let operator = expression.match(/[\+\-\*\/]/)[0];

//   let operand1 = parseInt(operands[0]);
//   let operand2 = parseInt(operands[1]);
//   let result;
//   switch (operator) {
//     case "+":
//       result = operand1 + operand2;
//       break;
//     case "-":
//       result = operand1 - operand2;
//       break;
//     case "*":
//       result = operand1 * operand2;
//       break;
//     case "/":
//       if (operand2 !== 0) {
//         result = operand1 / operand2;
//       } else {
//         return "Division by zero";
//       }
//       break;
//     default:
//       return "Invalid operator";
//   }

//   return result;
// }
// console.log(evaluateExpression("2+5"));
// console.log(evaluateExpression("10-3"));
// console.log(evaluateExpression("3*4"));
// console.log(evaluateExpression("20/5"));

// 32-masala

// function isEqual(a, b) {
//   if (a == 10 || b == 10 || a + b == 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEqual(10, 9);
// isEqual(6, 10);
// isEqual(1, 2);
// isEqual(1, 9);

// 33-masala
// let fuel;
// function fuelNeeded(distance) {
//   if (distance > 10) {
//     fuel = distance * 10;
//     console.log(`${fuel} litr yoqilg'li bilan yo'lga chiqadi`);
//   } else {
//     console.log("100 litr yoqilgi bilan yolga chiqadi");
//   }
// }
// fuelNeeded(23.5);
// fuelNeeded(15);
// fuelNeeded(3);

// 34-masala

// function biggerOne(a, b) {
//   return Math.max(a, b);
// }
// console.log(biggerOne(23, 56));
// console.log(biggerOne(23, -56));
// console.log(biggerOne(1, 1));

// 35-masala

// function changeToArray(a, b) {
//   return [a, b];
// }
// console.log(changeToArray(1, 2));
// console.log(changeToArray(164556, 28));
// console.log(changeToArray("Hello", "World"));

// 36-masala

// function isEqual(a, b) {
//   if (a.toString().length === b.toString().length) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isEqual("ab", "cd");
// isEqual("ab", "cde");
// isEqual(2, 3);
// isEqual(2, 34);

// 37-masala

// const emptyString = (a) => {
//   if (a.toString().length == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// emptyString("");
// emptyString(" ");
// emptyString("a");

// 38-masala

// function isDevider(n) {
//   if (n % 5 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isDevider(5);
// isDevider(55);
// isDevider(14);

// 39-masala

// function isDevider(n) {
//   if (n % 100 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isDevider(5);
// isDevider(5500);
// isDevider(200);

// 40-masala

// function countCharacters(str) {
//   if (str === "") {
//     return 0;
//   } else {
//     return 1 + countCharacters(str.slice(1));
//   }
// }
// console.log(countCharacters("Hello World"));
// console.log(countCharacters("apple"));
// console.log(countCharacters(""));

// 41-masala

// function isDevider(a, b) {
//   if (a % b == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isDevider(144, 12);
// isDevider(45, 13);
// isDevider(200, 10);

// 42-masala

// function changeToNumber(a) {
//   return +a;
// }
// console.log(changeToNumber("1"));
// console.log(changeToNumber("354"));
// console.log(changeToNumber(7));

// 43-masala

// function areaOfrectangle(a, b) {
//   if (a > 0 && b > 0) {
//     return a * b;
//   } else {
//     return -1;
//   }
// }
// console.log(areaOfrectangle(3, 4));
// console.log(areaOfrectangle(-3, 4));

// 44-masala

// function addString(a, b) {
//   return a + ", " + b;
// }
// console.log(addString("Hwan", "Lee"));
// console.log(addString("Hwannn", "Leeeee"));

// 45-masala

// function bug(bool) {
//   if (bool == true) {
//     console.log("Sad days");
//   } else {
//     console.log("It is a good day!");
//   }
// }
// bug(true);
// bug(false);

// 46-masala

// function removeElement(array, num) {
//   for (let i = 1; i <= num; i++) {
//     array.shift();
//   }
//   console.log(array);
// }
// removeElement([1, 2, 3], 1);
// removeElement([1, 2, 3], 3);
// removeElement([1, 2, 3], 0);

// 47-masala

// let voteCount = {
//   upvotes: 0,
//   downvotes: 0,
// };

// function calculateVotes() {
//   return voteCount.upvotes - voteCount.downvotes;
// }
// voteCount.upvotes = 10;
// voteCount.downvotes = 5;
// console.log(calculateVotes());
// voteCount.upvotes = 10;
// voteCount.downvotes = 15;
// console.log(calculateVotes());

// 48-masala

// function negativeOfnumber(n) {
//   if (n > 0) {
//     console.log(-n);
//   } else {
//     console.log(n);
//   }
// }
// negativeOfnumber(4);
// negativeOfnumber(-4);

///////////////////////////////////////////
//  Qo'shimcha masalar

// function greet(name) {
//   console.log("Hello there! " + name + " !");
// }
// let name = prompt("Enter your name:");
// greet(name);

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// function add(num1, num2) {
//   return num1 + num2;
// }
// let result = add(num1, num2);
// console.log(result);
// function sub(num1, num2) {
//   return num1 - num2;
// }
// let subResult = sub(num1, num2);
// console.log(subResult);

// const getRectArea = function (width, height) {
//   return width * height;
// };

// console.log(getRectArea(3, 4));

// const getRectArea = (width, height) => {
//   return width * height;
// };

// console.log(getRectArea(4, 4));

// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// function rectangle(a, b) {
//   let perimeter = 2 * (a + b);
//   let area = a * b;
//   return [perimeter, area];
// }
// let [perimeter, area] = rectangle(a, b);
// console.log(`${perimeter}, ${area}`);

// functions  2-masala

// function calculateTriangleProperties(sideLength) {
//   let perimeter = 3 * sideLength;
//   let area = (Math.sqrt(3) / 4) * Math.pow(sideLength, 2);
//   return [perimeter, area];
// }
// let sideLength = 6;
// let [perimeter, area] = calculateTriangleProperties(sideLength);
// console.log("Perimeter:", perimeter);
// console.log("Area:", area);

// 3-masala
// let summa = 0;
// function sum(n) {
//   for (let i = 1; i <= n; i++) {
//     summa += i;
//   }
//   return summa;
// }
// sum(79);
// console.log(summa);

// 4-masala

// function isSquare(number) {
//   let squareRoot = Math.sqrt(number);
//   return squareRoot === Math.floor(squareRoot);
// }
// console.log(isSquare(10));

// 5-masala

// function digitCount(num) {
//   return Math.abs(num).toString().length;
// }
// console.log(digitCount(-45));

// 6-masala

// function sumOfDigits(number) {
//   let numString = Math.abs(number).toString();
//   let sum = 0;
//   for (let i = 0; i < numString.length; i++) {
//     sum += parseInt(numString[i]);
//   }
//   return sum;
// }
// console.log(sumOfDigits(123455));

// 7-masala
// function countCapitalLetters(str) {
//   let count = 0;

//   // Iterate through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     // Check if the character is a capital letter using ASCII values
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//       count++;
//     }
//   }

//   return count;
// }

// // Test cases
// console.log(countCapitalLetters("Hello World")); // 2, capital letters H and W
// console.log(countCapitalLetters("JavaScript")); // 1, capital letter J
// console.log(countCapitalLetters("lowercase")); // 0, no capital letters

// function calculate(a, b, i) {
//   if (i == "+") {
//     console.log(a + b);
//   } else if (i == "-") {
//     console.log(a - b);
//   } else if (i == "*") {
//     console.log(a * b);
//   } else if (i == "/") {
//     console.log(a / b);
//   }
// }
// calculate(5, 7, "+");
// calculate(5, 7, "-");
// calculate(5, 7, "*");
// calculate(5, 7, "/");

// recursive function

// function countDown(num) {
//   console.log(num);
//   const newNum = num - 1;
//   if (newNum > 0) {
//     countDown(newNum);
//   }
// }
// countDown(9);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));
