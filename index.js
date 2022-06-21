// "use script";
console.log("===== JS Модуль 3.3. Занятие 1. Обедки =====");

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // 'Jamaica'
