// Задание 1
console.log("   Задание 1");

function numberToCube(number) {
    return Math.pow(number, 3);
}

const sumNumberToCube = numberToCube(2) + numberToCube(3)
console.log(`Результат суммы кубов двух чисел: ${sumNumberToCube}`);

const numToCube = num => Math.pow(num, 3);
const sumNumToCube = numToCube(2) + numToCube(3);
console.log(`Результат суммы кубов двух чисел (стрелочная функция): ${sumNumToCube}`);

// Задание 2
console.log("   Задание 2");

const tax = number => number * 0.13;

let userSalary;

userSalary = Number(prompt("Введите вашу зарплату - число"));
// if (isNaN(userSalary)) {
//     alert("Не верно введено значение. Надо ввести число.");
//     userSalary = Number(prompt("Введите вашу зарплату - ЧИСЛО!"));
// }

while (isNaN(userSalary)) {
    alert("Не верно введено значение. Надо ввести число.");
    userSalary = Number(prompt("Введите вашу зарплату - ЧИСЛО!"));
};

const salary = userSalary - tax(userSalary);

console.log(`Размер заработной платы за вычетом налогов равен значению ${salary} руб`);
alert(`Размер заработной платы за вычетом налогов равен значению ${salary} руб`);

// Задание 3
console.log("   Задание 3");

function maxThreeNumbers(num1, num2, num3) {
    let maxNum = num1;
    if (maxNum < num2) {
        maxNum = num2;
    } else if (maxNum < num3) {
        maxNum = num3;
    }
    return maxNum;
}

const num1 = Number(prompt("Введите первое число"));
const num2 = Number(prompt("Введите второе число"));
const num3 = Number(prompt("Введите третье число"));
const maxNumber = maxThreeNumbers(num1, num2, num3);

console.log(`Максимальное из трёх введённых чисел: ${maxNumber}`);
alert(`Максимальное из трёх введённых чисел: ${maxNumber}`);

// Задание 4
console.log("   Задание 4");

const sumTwoNumber = (a, b) => a + b;

function subTwoNumber(a, b) {
    if (a > b) {
        return (a - b);
    } else if (b > a) {
        return (b - a);
    } else {
        return 0;
    }
}

const multTwoNumber = (a, b) => a * b;

function divTwoNumber(a, b) {
    if (a > b) {
        return (a / b);
    } else if (b > a) {
        return (b / a);
    } else {
        return 1;
    }
}

const num11 = Number(prompt("Введите первое число"));
const num12 = Number(prompt("Введите второе число"));

console.log(`Сумма чисел ${sumTwoNumber(num11, num12)}`);
console.log(`Разность чисел ${subTwoNumber(num11, num12)}`);
console.log(`Умножение чисел ${multTwoNumber(num11, num12)}`);
console.log(`Деление чисел ${divTwoNumber(num11, num12)}`);
