// 1)
// let user = {
//   name: "Ibrahim",
//   gender: "male",
//   birthDay: "06.03.2001",
//   setAge: function (age) {
//     this.age = age;
//   },
//   getYearsBeforeRetirement: function () {
//     return 65 - this.age;
//   },
// }
// console.log(user.birthDay);


// 2-3)
// user.age = 24;
// delete user.birthDay;
// console.log(user);
// user.setAge(25);
// console.log(user.age);
// console.log(user.getYearsBeforeRetirement());


// 4)
// const card = {
//     fullName: "Murad",
//     limit:500,
//     balance:0,
//     percentOfMinPayment:0.1,
//     getBalance:function(){
//         if (this.balance >= 0){
//             return `balance: ${this.balance} M`;
//         }
//         else{
//             return `borcunuz: ${this.balance} `;
//         }
//     },
//     getMinPayment: function(){
//         if (this.balance>=0){
//             return `borcunuz yoxdur`
//         }else{
//             return `Minimum odenisiniz: ${this.balance * this.getMinPayment}`
//         }
//     },
//     withDraw: function (amount){
//         if (this.balance >amount){
//             this.balance -= amount;
//             return this.balance
//         }else if(this.limit + this.balance > amount){
//             this.limit = 500;
//             this.balance -= amount;
//             this.limit += this.balance;
//         }else{
//             return `balansinizda vesait qalmayib`;
//         }
//     },
//     refill: function (amount){
//         this.balance += amount;
//         if (this.balance < 0){
//             this.limit = 500;
//             this.limit += this.balance;
//         }
//     }
// }
// console.log(card.getBalance());
// console.log(card.getMinPayment());
// console.log(card.withDraw());

// console.log(card.getBalance());
// console.log(card.withDraw(90));
// console.log(card.getBalance());
// card.withDraw(20);
// console.log(card.getBalance());
// console.log(card.limit);
// console.log(card.getBalance());
// console.log(card.limit);
// card.refill(5)
// console.log(card.getBalance());
// console.log(card.limit);


// 5)
function calculator() {
    let a = Number(prompt("Enter the first number"));
    let b = Number(prompt("Enter the second number"));
    let operator = prompt("Enter the (+, -, *, /, %, **) operator");

    if (operator == "+") {
        alert(a + b);
    } else if (operator == "-") {
        alert(a - b);
    } else if (operator == "*") {
        alert(a * b);
    } else if (operator == "/") {
        if (b == 0) {
            alert("Can't divide by 0");
        } else {
            alert(a / b);
        }
    } else if (operator == "%") {
        alert(a % b);
    } else if (operator == "**") {
        alert(a ** b);
    } else {
        alert("Wrong operation");
    }
}

calculator();