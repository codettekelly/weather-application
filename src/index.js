let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let now = new Date();
let minutes = now.getMinutes();
let hours = now.getHours();
let date = now.getDate();
let year = now.getFullYear();
let h2 = document.querySelector("h2");
let currentDate = document.querySelector("#current-date");
let localTime = document.querySelector("#local-time");

let month = months[now.getMonth()];
let day = days[now.getDay()];
h2.innerHTML = day;
currentDate.innerHTML = `${date} ${month} ${year}`;
localTime.innerHTML = `${hours}:${minutes}`;

function CelusToFarenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  let farenheitTemp = temperature.innerHTML;
  temperature.innerHTML = Math.round((farenheitTemp * 9) / 5 + 32);
}
let farenheit = document.querySelector("#fahrenheit-link");
farenheit.addEventListener("click", CelusToFarenheit);

function FarenheitToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = `21`;
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", FarenheitToCelsius);

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#weather-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${input.value}`;
}
let form = document.querySelector("#weather-form");
form.addEventListener("submit", search);
