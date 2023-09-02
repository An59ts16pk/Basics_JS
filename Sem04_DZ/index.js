// Задание 1
console.log("   Задание 1.");
let num1 = Number(prompt("Введите первую переменную"));
let num2 = Number(prompt("Введите вторую переменную"));

if (num1 <= 1) {
    alert("Значение первой переменной равно или меньше 1");
} else {
    alert("Значение первой переменной больше 1");
}
console.log(`Введённое первое число = ${num1}`);
console.log((num1 <= 1) ? "Значение первой переменной равно или меньше 1" : "Значение первой переменной больше 1");

if (num2 >= 3) {
    alert("Значение второй переменной больше или равно 3");
} else {
    alert("Значение второй переменной меньше 3")
}
console.log(`Введённое второе число = ${num2}`);
console.log((num2 >= 3) ? "Значение второй переменной больше или равно 3" : "Значение второй переменной меньше 3");

// Задание 2
console.log("   Задание 2.");
let test = true;
console.log((test === true) ? '+++' : '---');

// Задание 3
console.log("   Задание 3.");
let day = 11;
if (day >= 1 && day <= 10) {
    console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
    console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третья декада");
} else {
    console.log("Не число месяца");
}
console.log(`Число в переменной day = ${day}`);

// Задание 4
console.log("   Задание 4.");
let number = prompt("Введите число");
let num = number % 1000;

let units = num % 10;
let dozens = parseInt((num % 100) / 10);
let hundreds = parseInt(num / 100);

alert(`В числе ${number} - количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`);
console.log(`Введённое число: ${number}`);
console.log(`В числе ${number} - количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`);