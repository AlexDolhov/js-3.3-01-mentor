// "use script";
console.log("===== JS Модуль 3.3. Занятие 1. Обедки =====");

//======hasOwnProperty===========

// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// Код

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

// добавляет поле mood со значением 'happy'

user.mod = "happy";
// заменяет значение hobby на 'skydiving'
user.hobby = "skydiving";
// заменяет значение premium на false
user.premium = "true";

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

for (const item of Object.entries(user)) {
  console.log(`${key}: ${user[key]}`);
}

console.log(user);

//=================for..in

// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// Код

function calcTotalPrice(stones, stoneName) {
  let totalPrice = 0;
  for (const item of stones) {
    const name = item.name;
    const price = item.price;
  }
  return 0;
}

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
];

console.log(calcTotalPrice(stones, "Изумруд"));
console.log(calcTotalPrice(stones, "Изумруд"));
