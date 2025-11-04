// TASk-17

// 1)
// let bookPrice = 750;
// let bookAmount = 14;
// console .log(bookPrice*bookAmount)

// 2)
// let kmSpeed = 75;
// let msSpeed = kmSpeed / 3.6;
// console .log(msSpeed)

// 3)
// let birth = prompt("type your birth date to know the date you lived");

// let totalDay = (2025- birth) * 365;
// alert (totalDay)

// 4)
// let num = 25;
// let pw = num ** 5;
// let mdl = num % 3;

// console .log(pw)
// console .log(mdl)

//5)
// let firstName = "Alan";
// let lastname = "Turing";
// console .log("Your name " + firstName + " " + lastname + "." + " Nice to meet you ")

// 6)
// let firstName = "Alan";
// let lastName = "Turing";
// console .log("It's nice to see you again, " + firstName  + " " + lastName )

// 7)
// let fullName = "Murad Orucov";
// let char = fullName.length - fullName.includes(" ");
// console .log(char)

// 8)
// let fullName = "Murad Orucov";
// let name = fullName.split(" ")[0][0];
// let surName = fullName.split(" ")[1][0];
// console .log("Your initials are: " + name + " " + surName + ".")

// 9)
// let fullName = prompt("Please enter your fullname like Name Surname:");
// let divide = fullName.split(" ");
// let reversedName = (divide[1] + " " + divide[0])
// console .log("Your reversed name:" + reversedName)

// 10)
// let name = prompt ("Enter your name and surname");
// console .log("Hello," + name)

// 11)
// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// num1 = Number(num1)
// num2 = Number(num2)

// let add = num1 + num2;
// let difference = num1 - num2;
// let multiply = num1 * num2;
// let division = num1 / num2;

// console.log("add: " + add);
// console.log("difference: " + difference);
// console.log("multiply: " + multiply);
// console.log("division: " + division);

// 12)
// let num1 = 12345;
// let num2 = 98765;
// let multiply = num1 * num2;
// let multiplyStr = multiply.toString();
// let sixthdigit = multiplyStr [5];
// console .log(multiply);
// console .log(sixthdigit)

// 13)
// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// "true" - false = NaN
// 6 / "3" = 2
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 + "px" = "Nanpx"
// 7 / 0 = Infinity
// "-9" + 5 = "-95"
// "-9" - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN

// 14)
// let num = prompt("Enter 4 digit number");
// let num_index = Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]);
// console .log(num_index)

// 15)
// let name = prompt ("Enter your name and surname");
// console .log(`Hello,  ${name}! `)

// 16)

// 19)
// let value = 10;
// console.log(value < 15);
// console.log(value <= 10);
// console.log(value == 10);
// console.log(value !== 20);
// console.log(value < 20);

// let value2 = 20;
// console.log(value2 < 15);
// console.log(value2 <= 10);
// console.log(value2 == 10);
// console.log(value2 !== 20);
// console.log(value2 < 20);




// TASk-18


// 1)
// let id = prompt("Enter product id:");

// switch (id) {
//   case "1":
//     alert("Available 10 pcs.");
//     break;
//   case "2":
//     alert("Available 256 pcs.");
//     break;
//   case "3":
//     alert("Available 53 pcs.");
//     break;
//   case "4":
//     alert("There are 3 available.");
//     break;
//   default:
//     alert("Out of stock");
// }

// 2)
// let month = Number(prompt("Enter month number between (1-12):"));

// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     alert("Wrong month number entered");
// }

// 20)
// let age = prompt("Enter your age");

// if (age >= 18){
//     alert("Access granted");
// }
// else if (age <18){
//     alert("Access denied");
// }
// else{
//     alert("Unrecognized value");
// }

// 22)
// let year = Number(prompt("Enter a year:")); 

// if (year % 4 === 0) {
//   console.log("Year is long one");

// } else {
//   console.log("Year is not long");
// }

// 23)
// let letter = prompt("enter your gender (M or F):");
// let gender;

// if (letter === "M" || letter === "m") {
//   gender = "male";
// } else if (letter === "F" || letter === "f") {
//   gender = "female";
// } else {
//   gender = alert("wrong entry");
// }

// console.log("Gender:", gender);