let a = 10;
let b = 20;
let c = a + b;
console.log("Сумма: " + c);

function multiply(x, y) {
  return x * y;
}

let result = multiply(5, 6);
console.log("Результат умножения: " + result);

let age = 18;
if (age >= 18) {
  console.log("Вы совершеннолетний.");
} else {
  console.log("Вы несовершеннолетний.");
}

for (let i = 1; i <= 5; i++) {
  console.log("Номер: " + i);
}

let fruits = ["яблоко", "банан", "груша"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Фрукт: " + fruits[i]);
}

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let numbers = [1, 2, 3, 4, 5];
printArray(numbers);

let person = {
  name: "Иван",
  age: 25,
  city: "Киев"
};

console.log("Имя: " + person.name);
console.log("Возраст: " + person.age);
console.log("Город: " + person.city);

person.age = 26;
console.log("Новый возраст: " + person.age);

function printPersonInfo(p) {
  console.log("Имя: " + p.name);
  console.log("Возраст: " + p.age);
  console.log("Город: " + p.city);
}

printPersonInfo(person);

document.body.innerHTML += "<p>Привет, мир!</p>";

let button = document.createElement("button");
button.textContent = "Нажми меня";
document.body.appendChild(button);

button.addEventListener("click", function() {
  alert("Кнопка была нажата!");
});

function addNumbers(x, y) {
  return x + y;
}

let sum = addNumbers(7, 8);
console.log("Сумма чисел: " + sum);

let colors = ["красный", "синий", "зеленый"];
colors.forEach(function(color) {
  console.log("Цвет: " + color);
});

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let total = sumArray([10, 20, 30, 40]);
console.log("Сумма массива: " + total);

// Использование цикла while
let counter = 1;
while (counter <= 3) {
  console.log("Счетчик: " + counter);
  counter++;
}

let counter2 = 1;
do {
  console.log("Счетчик 2: " + counter2);
  counter2++;
} while (counter2 <= 3);

function applyOperation(x, y, operation) {
  return operation(x, y);
}

let multiplication = applyOperation(5, 3, multiply);
console.log("Умножение через высшую функцию: " + multiplication);

let currentDate = new Date();
console.log("Текущая дата: " + currentDate);

function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(5, 10);
console.log("Площадь: " + area);

function isEven(number) {
  return number % 2 === 0;
}

let number = 4;
if (isEven(number)) {
  console.log(number + " - четное число.");
} else {
  console.log(number + " - нечетное число.");
}

let square = (x) => x * x;
console.log("Квадрат числа 5: " + square(5));

let doubledNumbers = numbers.map((num) => num * 2);
console.log("Удвоенные числа: " + doubledNumbers);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Четные числа: " + evenNumbers);

let totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Общая сумма: " + totalSum);

let message = "Привет, мир!";
let upperMessage = message.toUpperCase();
console.log("Сообщение в верхнем регистре: " + upperMessage);

let substring = message.substring(0, 6);
console.log("Подстрока: " + substring);

console.log("Длина строки: " + message.length);

function countdown(start) {
  while (start > 0) {
    console.log("Осталось: " + start);
    start--;
  }
  console.log("Время вышло!");
}

countdown(5);

